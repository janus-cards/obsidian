import {
	describe,
	expect,
	jest,
	test,
	beforeEach,
	afterEach,
} from "@jest/globals";

jest.mock("obsidian");

import { ObsidianEventStreamService } from "../../grpc/event-stream/service";
import {
	Empty,
	ObsidianEvent,
	UnimplementedObsidianEventStreamService,
} from "../../grpc/proto/obsidian_events";
import wait from "../../include/promise";
import GrpcServer from "../../grpc/server";
import { EventGrpcProxy } from "../event-grpc-proxy";
import { ChannelCredentials } from "@grpc/grpc-js";
import { Plugin } from "@/__mocks__/obsidian-mock/plugin";
import { App } from "@/__mocks__/obsidian";
import getTestApp from "../../__tests__/utilities/get-test-vault";
import { TFile } from "@/__mocks__/obsidian-mock/files";
import { randomPort, randomString } from "../../include/random";

describe("gRPC Server Tests", () => {
	let server: GrpcServer;
	let client: EventGrpcProxy;
	let app: App;
	let plugin: Plugin;
	const onEvent = jest.fn<(event: ObsidianEvent) => void>();

	const randomPort = Math.floor(Math.random() * 10000) + 5000;

	beforeEach(async () => {
		server = new GrpcServer();
		onEvent.mockClear();
		server.addService(
			UnimplementedObsidianEventStreamService.definition,
			new ObsidianEventStreamService(onEvent)
		);
		server.start(randomPort);
		app = getTestApp();
		plugin = new Plugin(app);
		client = new EventGrpcProxy(plugin, {
			address: `127.0.0.1:${randomPort}`,
			credentials: ChannelCredentials.createInsecure(),
			verbose: true,
			reconnectDelayMs: 3000,
		});
		client.startWatching();
		await new Promise((resolve) => setTimeout(resolve, 500));
	});

	afterEach(async () => {
		client.stop();
		server.forceShutdown();
	});

	test("should handle file creation events", async () => {
		const path = "Algorithms MOC/XOR Switch.md";
		const content = "You can use 3 xors to swap to variables";
		await app.vault.create(path, content);
		// Wait 1 second for the event to be sent
		await wait(1000);
		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event).toEqual("create");
		expect(onEvent.mock.calls[0][0].create.filePath).toEqual(path);
	});

	test("should handle file modification events", async () => {
		const path = new TFile("Algorithms MOC/Bit Manipulation Tricks.md");
		// Modify the file
		await app.vault.modify(path, "Updated content");

		// Wait for the event to be sent
		await wait(1000);

		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event).toEqual("modify");
		expect(onEvent.mock.calls[0][0].modify.filePath).toEqual(path.path);
	});

	test("should handle file rename events", async () => {
		const oldPath = new TFile("Algorithms MOC/Bit Manipulation Tricks.md");
		const newPath = "Algorithms MOC/Bit Manipulation.md";

		// Rename the file
		await app.vault.rename(oldPath, newPath);

		// Wait for the event to be sent
		await wait(1000);

		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event).toEqual("rename");
		expect(onEvent.mock.calls[0][0].rename.oldPath).toEqual(oldPath.path);
		expect(onEvent.mock.calls[0][0].rename.newPath).toEqual(newPath);
	});

	test("should handle file deletion events", async () => {
		const file = new TFile("Algorithms MOC/Bit Manipulation Tricks.md");

		// Delete the file
		await app.vault.delete(file);

		// Wait for the event to be sent
		await wait(1000);

		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event).toEqual("delete");
		expect(onEvent.mock.calls[0][0].delete.filePath).toEqual(file.path);
		expect(await app.vault.exists(file.path)).toEqual(false);
	});

	test("should handle file open events", async () => {
		const file = new TFile("Algorithms MOC/XOR Switch.md");
		app.workspace.getLeaf("split", "left").openFile(file);

		// Wait for the event to be sent
		await wait(1000);

		expect(onEvent.mock.calls.length).toEqual(1);
		const protoEvent = onEvent.mock.calls[0][0];
		expect(protoEvent.event).toEqual("fileOpen");
		expect(protoEvent.fileOpen.filePath).toEqual(file.path);
	});
});

describe("EventGrpcProxy Tests", () => {
	let client: EventGrpcProxy;
	let server: GrpcServer;
	let plugin: Plugin;
	let port: number;
	const onError = jest.fn<(err: Error) => void>();
	const onReceive = jest.fn();
	onReceive.mockReturnValue(new Empty());

	const createRandomFile = () => {
		const fileName = `test-${randomString(5)}.md`;
		plugin.app.vault.create(fileName, "Test file");
		return fileName;
	};

	const startServer = () => {
		server = new GrpcServer();
		server.addService(
			UnimplementedObsidianEventStreamService.definition,
			new ObsidianEventStreamService(onReceive)
		);
		server.start(port);
	};

	beforeEach(async () => {
		const app = getTestApp();
		plugin = new Plugin(app);

		port = randomPort();
		client = new EventGrpcProxy(
			plugin,
			{
				address: `127.0.0.1:${port}`,
				credentials: ChannelCredentials.createInsecure(),
				verbose: true,
				reconnectDelayMs: 500,
			},
			onError
		);

		client.startWatching();
	});

	test("should handle connection failure and auto-reconnect", async () => {
		// Creating a random file before starting the server should trigger an error
		createRandomFile();
		await wait(1500);
		expect(onError.mock.calls.length).toEqual(1);
		expect(onReceive.mock.calls.length).toEqual(0);

		// Start the server
		startServer();

		await wait(1000);
		createRandomFile();
		await wait(1500);
		// Should see no errors from this
		expect(onError.mock.calls.length).toEqual(1);
		expect(onReceive.mock.calls.length).toEqual(1);

		// Stop the server
		server.forceShutdown();

		await wait(500);
		createRandomFile();
		await wait(1500);
		// This should fail
		expect(onError.mock.calls.length).toEqual(2);
		expect(onReceive.mock.calls.length).toEqual(1);

		// Start the server again
		startServer();

		await wait(1000);
		createRandomFile();
		await wait(1500);

		// Should now be connected
		expect(onError.mock.calls.length).toEqual(2);
		expect(onReceive.mock.calls.length).toEqual(2);
	}, 10000);

	// Add more tests for other event types...
});

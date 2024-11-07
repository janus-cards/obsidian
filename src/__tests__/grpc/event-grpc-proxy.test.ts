import {
	describe,
	expect,
	jest,
	test,
	beforeAll,
	beforeEach,
	afterAll,
} from "@jest/globals";

jest.mock("obsidian");

import * as grpc from "@grpc/grpc-js";
import {
	ReceivedEvent,
	ObsidianEventStreamService,
} from "../../grpc/event-stream/service";
import { UnimplementedObsidianEventStreamService } from "../../grpc/proto/obsidian_events";
import wait from "../../include/promise";
import GrpcServer from "../../grpc/server";
import { EventGrpcProxy } from "../../event-snooping/event-grpc-proxy";
import { ChannelCredentials } from "@grpc/grpc-js";
import { Plugin } from "@/__mocks__/obsidian-mock/plugin";
import { App } from "@/__mocks__/obsidian";
import getTestApp from "../utilities/get-test-vault";
import { TFile } from "@/__mocks__/obsidian-mock/files";

describe("gRPC Server Tests", () => {
	let server: GrpcServer;
	let client: EventGrpcProxy;
	let app: App;
	let plugin: Plugin;
	const onEvent = jest.fn<(event: ReceivedEvent) => void>();

	const randomPort = Math.floor(Math.random() * 10000) + 5000;

	beforeAll(async () => {
		server = new GrpcServer();
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
		client.connect();
		client.watchEvents();
		await new Promise((resolve) => setTimeout(resolve, 500));
	});

	beforeEach(() => {
		onEvent.mockClear();
	});

	afterAll(async () => {
		client.close();
	});

	test("should handle file creation events", async () => {
		const path = "Algorithms MOC/XOR Switch.md";
		const content = "You can use 3 xors to swap to variables";
		await app.vault.create(path, content);
		// Wait 1 second for the event to be sent
		await new Promise((resolve) => setTimeout(resolve, 1000));
		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event.event).toEqual("create");
		expect(onEvent.mock.calls[0][0].event.create.filePath).toEqual(path);
	});

	test("should handle file modification events", async () => {
		const path = new TFile("Algorithms MOC/Bit Manipulation Tricks.md");
		// Modify the file
		await app.vault.modify(path, "Updated content");

		// Wait for the event to be sent
		await new Promise((resolve) => setTimeout(resolve, 1000));

		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event.event).toEqual("modify");
		expect(onEvent.mock.calls[0][0].event.modify.filePath).toEqual(
			path.path
		);
	});

	test("should handle file rename events", async () => {
		const oldPath = new TFile("Algorithms MOC/Bit Manipulation Tricks.md");
		const newPath = "Algorithms MOC/Bit Manipulation.md";

		// Rename the file
		await app.vault.rename(oldPath, newPath);

		// Wait for the event to be sent
		await new Promise((resolve) => setTimeout(resolve, 1000));

		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event.event).toEqual("rename");
		expect(onEvent.mock.calls[0][0].event.rename.oldPath).toEqual(
			oldPath.path
		);
		expect(onEvent.mock.calls[0][0].event.rename.newPath).toEqual(newPath);
	});

	test("should handle file deletion events", async () => {
		const file = new TFile("Algorithms MOC/Bit Manipulation.md");

		// Delete the file
		await app.vault.delete(file);

		// Wait for the event to be sent
		await new Promise((resolve) => setTimeout(resolve, 1000));

		expect(onEvent.mock.calls.length).toEqual(1);
		expect(onEvent.mock.calls[0][0].event.event).toEqual("delete");
		expect(onEvent.mock.calls[0][0].event.delete.filePath).toEqual(
			file.path
		);
		expect(await app.vault.exists(file.path)).toEqual(false);
	});

	test("should handle file open events", async () => {
		const file = new TFile("Algorithms MOC/XOR Switch.md");
		app.workspace.getLeaf("split", "left").openFile(file);

		// Wait for the event to be sent
		await new Promise((resolve) => setTimeout(resolve, 1000));

		expect(onEvent.mock.calls.length).toEqual(1);
		const protoEvent = onEvent.mock.calls[0][0].event;
		const protoName = protoEvent.event;
		expect(protoName).toEqual("fileOpen");
		expect(protoEvent[protoName].filePath).toEqual(file.path);
	});
});

describe("EventGrpcProxy Tests", () => {
	let client: EventGrpcProxy;
	let server: GrpcServer;
	let plugin: Plugin;
	let port: number;
	const reconnectDelayMs = 500;

	const createServer = () => {
		server = new GrpcServer();
		server.addService(
			UnimplementedObsidianEventStreamService.definition,
			new ObsidianEventStreamService(jest.fn())
		);
	};

	beforeEach(async () => {
		const app = getTestApp();
		plugin = new Plugin(app);

		port = Math.floor(Math.random() * 10000) + 5000;
		client = new EventGrpcProxy(plugin, {
			address: `127.0.0.1:${port}`,
			credentials: ChannelCredentials.createInsecure(),
			verbose: true,
			reconnectDelayMs: 500,
		});

		client.connect();
		client.watchEvents();
	});

	test("should handle connection failure and auto-reconnect", async () => {
		// Should start in Connecting state
		expect(client.getConnectionState()).toBe("Connecting");

		// Wait a bit to ensure connection attempt fails
		await wait(500);

		// Should be in Unconnected state after failure
		expect(client.getConnectionState()).toBe("Unconnected");

		// Start the server
		createServer();
		server.start(port);

		// Wait for auto-reconnect (should be just over reconnectDelayMs)
		await wait(reconnectDelayMs + 500);

		// Should now be connected
		expect(client.getConnectionState()).toBe("Connected");

		// Stop the server and wait for the client to fail reconnecting.
		server.forceShutdown();
		await wait(reconnectDelayMs + 500);
		expect(client.getConnectionState()).toBe("Unconnected");

		// Start the server again
		createServer();
		server.start(port);

		// Wait for auto-reconnect (should be just over reconnectDelayMs)
		await wait(reconnectDelayMs + 500);

		expect(client.getConnectionState()).toBe("Connected");
	});

	// Add more tests for other event types...
});

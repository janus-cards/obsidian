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
	ObsidianEventStreamService,
	ReceivedEvent,
	startServer,
} from "../../proto/grpc-test-server";
import { EventGrpcProxy } from "../../event-snooping/event-grpc-proxy";
import { ChannelCredentials } from "@grpc/grpc-js";
import { Plugin } from "@/__mocks__/obsidian-mock/plugin";
import { App } from "@/__mocks__/obsidian";
import getTestApp from "../utilities/get-test-vault";
import { TFile } from "@/__mocks__/obsidian-mock/files";

describe("gRPC Server Tests", () => {
	let server: grpc.Server;
	let client: EventGrpcProxy;
	let app: App;
	let plugin: Plugin;
	const onEvent = jest.fn<(event: ReceivedEvent) => void>();

	const randomPort = Math.floor(Math.random() * 10000) + 5000;

	beforeAll(async () => {
		server = await startServer(randomPort, onEvent);
		app = getTestApp();
		plugin = new Plugin(app);
		client = new EventGrpcProxy(plugin, {
			address: `127.0.0.1:${randomPort}`,
			credentials: ChannelCredentials.createInsecure(),
			verbose: true,
			reconnectDelayMs: 3000,
		});
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
	let server: grpc.Server;
	let plugin: Plugin;

	beforeAll(async () => {
		const app = getTestApp();
		plugin = new Plugin(app);
	});

	test("should handle connection failure and auto-reconnect", async () => {
		const reconnectDelayMs = 500;
		const port = Math.floor(Math.random() * 10000) + 5000;

		// Create client before server exists
		client = new EventGrpcProxy(plugin, {
			address: `127.0.0.1:${port}`,
			credentials: ChannelCredentials.createInsecure(),
			verbose: false,
			reconnectDelayMs,
		});
		client.watchEvents();

		// Should start in Connecting state
		expect(client.getConnectionState()).toBe("Connecting");

		// Wait a bit to ensure connection attempt fails
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Should be in Unconnected state after failure
		expect(client.getConnectionState()).toBe("Unconnected");

		// Start the server
		server = await startServer(port, (event) => {
			console.log("Received event", event);
		});

		// Wait for auto-reconnect (should be just over reconnectDelayMs)
		await new Promise((resolve) =>
			setTimeout(resolve, reconnectDelayMs + 500)
		);

		// Should now be connected
		expect(client.getConnectionState()).toBe("Connected");

		// Stop the server and wait for the client to fail reconnecting.
		server.forceShutdown();
		await new Promise((resolve) =>
			setTimeout(resolve, reconnectDelayMs + 500)
		);
		expect(client.getConnectionState()).toBe("Unconnected");

		// Start the server again
		server = await startServer(port, (event) => {
			console.log("Received event", event);
		});

		// Wait for auto-reconnect (should be just over reconnectDelayMs)
		await new Promise((resolve) =>
			setTimeout(resolve, reconnectDelayMs + 500)
		);
		expect(client.getConnectionState()).toBe("Connected");
	});

	// Add more tests for other event types...
});

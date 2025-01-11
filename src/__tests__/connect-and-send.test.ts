import {
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	jest,
} from "@jest/globals";

jest.mock("obsidian");

import { randomPort, randomString } from "../include/random";
import GrpcServer from "../grpc/server";
import { FeedManager } from "../connect-and-send";
import { Plugin } from "../__mocks__/obsidian-mock/plugin";
import {
	ConnectRequest,
	ConnectResponse,
	UnimplementedObsidianConnectService,
} from "../grpc/proto/obsidian_connect";
import { ObsidianConnectService } from "../grpc/connect/service";
import {
	Empty,
	ObsidianEvent,
	UnimplementedObsidianEventStreamService,
} from "../grpc/proto/obsidian_events";
import { ObsidianEventStreamService } from "../grpc/event-stream/service";
import getTestApp, { getTestVaultFolder } from "./utilities/get-test-vault";
import wait from "../include/promise";

describe("Connect and send", () => {
	let feedManager: FeedManager;
	let connectServer: GrpcServer;
	let eventServer: GrpcServer;
	let connectPort: number;
	let eventPort: number;
	let plugin: Plugin;
	const request = new ConnectRequest();

	const connectServerMock =
		jest.fn<(request: ConnectRequest) => ConnectResponse>();

	const eventServerMock = jest.fn<(event: ObsidianEvent) => Empty>();
	eventServerMock.mockReturnValue(new Empty());

	const allowConnect = () => {
		connectServerMock.mockReturnValue(
			new ConnectResponse({ status: ConnectResponse.Status.READY }),
		);
	};

	const disallowConnect = () => {
		connectServerMock.mockReturnValue(
			new ConnectResponse({ status: ConnectResponse.Status.NOT_READY }),
		);
	};

	const createRandomFile = () => {
		const randomFileName = `test-${randomString(10)}.md`;
		plugin.app.vault.create(randomFileName, "test");
		return randomFileName;
	};

	const createConnectServer = () => {
		const server = new GrpcServer();
		server.addService(
			UnimplementedObsidianConnectService.definition,
			new ObsidianConnectService(connectServerMock),
		);
		return server;
	};

	const createEventServer = () => {
		const server = new GrpcServer();
		server.addService(
			UnimplementedObsidianEventStreamService.definition,
			new ObsidianEventStreamService(eventServerMock),
		);
		return server;
	};

	beforeEach(() => {
		// Setup the servers
		connectPort = randomPort();
		eventPort = randomPort();
		connectServer = createConnectServer();
		eventServer = createEventServer();
		connectServerMock.mockClear();
		disallowConnect();
		eventServerMock.mockClear();

		// Setup the plugin
		const app = getTestApp();
		plugin = new Plugin(app);

		// Setup the feed manager
		const vaultPath = getTestVaultFolder();
		request.vault_path = vaultPath;
		request.version = "1.0.0";
		feedManager = new FeedManager(plugin, request, connectPort, eventPort);
	});

	afterEach(() => {
		feedManager.stop();
	});

	it("should send events only when connections are accepted", async () => {
		// When our plugin is running but not connected to the server, the server will not see any events
		feedManager.start();
		createRandomFile();

		await wait(100);

		// Should not have received any events
		expect(eventServerMock).not.toHaveBeenCalled();

		// Connect to the server
		connectServer.start(connectPort);
		eventServer.start(eventPort);

		await wait(2000);
		// Should now be connected to the connect server and have sent at least one connect request
		expect(connectServerMock).toHaveBeenCalledTimes(1);
		// Create a new file
		createRandomFile();
		await wait(200);

		// Event stream still should not have received any events
		expect(eventServerMock).toHaveBeenCalledTimes(0);

		// Set the connect server mock so that it returns a success response
		allowConnect();

		// Wait for the client to receive the response
		await wait(2000);

		// Now we should see events being streamed

		createRandomFile();
		await wait(200);
		expect(eventServerMock).toHaveBeenCalledTimes(1);

		// Restarting the connect server causes the client to have to restart the loop
		disallowConnect();
		connectServer.forceShutdown();
		connectServer = createConnectServer();
		connectServer.start(connectPort);
		await wait(2000);

		// No longer receiving events
		createRandomFile();
		await wait(200);
		expect(eventServerMock).toHaveBeenCalledTimes(1);

		// Can reconnect again
		allowConnect();
		await wait(1000);
		createRandomFile();
		await wait(1000);
		expect(eventServerMock).toHaveBeenCalledTimes(1);
	}, 15000);
});

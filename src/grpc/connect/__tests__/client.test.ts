import {
	describe,
	expect,
	jest,
	test,
	beforeEach,
	afterEach,
} from "@jest/globals";
import { ChannelCredentials } from "@grpc/grpc-js";
import { ConnectClient } from "../client";
import GrpcServer from "../../server";
import {
	ConnectRequest,
	ConnectResponse,
	UnimplementedObsidianConnectService,
} from "../../proto/obsidian_connect";
import { ObsidianConnectService } from "../service";
import wait from "../../../include/promise";

describe("ConnectClient Tests", () => {
	let server: GrpcServer;
	let client: ConnectClient;
	const onConnect = jest.fn<(request: ConnectRequest) => ConnectResponse>();
	const onConnectResponse = jest.fn();
	const port = Math.floor(Math.random() * 10000) + 5000;

	const createServer = () => {
		server = new GrpcServer();
		server.addService(
			UnimplementedObsidianConnectService.definition,
			new ObsidianConnectService(onConnect)
		);
		server.start(port);
	};

	beforeEach(async () => {
		createServer();

		client = new ConnectClient(
			{
				address: `127.0.0.1:${port}`,
				credentials: ChannelCredentials.createInsecure(),
				verbose: true,
				reconnectDelayMs: 500,
			},
			onConnectResponse
		);

		client.connect();
		await wait(1000);
	});

	afterEach(() => {
		client.stop();
		server.forceShutdown();
	});

	test("should successfully connect and send request", async () => {
		const request = new ConnectRequest({
			vault_path: "/test/vault/path",
			version: "1.0.0",
		});

		client.sendRequest(request);

		await wait(500);

		expect(onConnect).toHaveBeenCalled();
	});

	test("should handle connection failure and auto-reconnect", async () => {
		// Initial state should be Connected after beforeEach
		expect(client.getConnectionState()).toBe("Connected");

		// Force shutdown server
		server.forceShutdown();
		await wait(1000);

		// Should be Unconnected after server shutdown
		expect(client.getConnectionState()).toBe("Unconnected");

		// Restart server
		createServer();
		// Wait for auto-reconnect
		await wait(1000);

		// Should be Connected again
		expect(client.getConnectionState()).toBe("Connected");
	});

	test("should not reconnect if client is paused", async () => {
		client.pause();
		expect(client.getConnectionState()).toBe("Connected");
		server.forceShutdown();
		await wait(1000);
		expect(client.getConnectionState()).toBe("Unconnected");

		createServer();
		await wait(1000);
		expect(client.getConnectionState()).toBe("Unconnected");

		client.connect();
		await wait(1000);
		expect(client.getConnectionState()).toBe("Connected");
	});
});

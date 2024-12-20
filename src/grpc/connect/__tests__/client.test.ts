import { ChannelCredentials } from "@grpc/grpc-js";
import {
	describe,
	expect,
	jest,
	test,
	beforeEach,
	afterEach,
} from "@jest/globals";

import wait from "../../../include/promise";
import { randomPort } from "../../../include/random";
import {
	ConnectRequest,
	ConnectResponse,
	UnimplementedObsidianConnectService,
} from "../../proto/obsidian_connect";
import GrpcServer from "../../server";
import { ConnectClient } from "../client";
import { ObsidianConnectService } from "../service";

describe("ConnectClient Tests", () => {
	let server: GrpcServer;
	let client: ConnectClient;
	const onConnect = jest.fn<(request: ConnectRequest) => ConnectResponse>();
	const onConnectResponse = jest.fn();
	const port = randomPort();

	const createServer = (): void => {
		server = new GrpcServer();
		server.addService(
			UnimplementedObsidianConnectService.definition,
			new ObsidianConnectService(onConnect),
		);
		server.start(port);
	};

	beforeEach(async () => {
		createServer();

		client = new ConnectClient({
			address: `127.0.0.1:${port}`,
			credentials: ChannelCredentials.createInsecure(),
			verbose: true,
			reconnectDelayMs: 500,
		});

		await wait(1000);
	});

	afterEach(() => {
		client.close();
		server.forceShutdown();
	});

	test("should successfully connect and send request", async () => {
		const request = new ConnectRequest({
			vault_path: "/test/vault/path",
			version: "1.0.0",
		});

		client.connect(request, onConnectResponse);

		await wait(500);

		expect(onConnect).toHaveBeenCalled();
	});
});

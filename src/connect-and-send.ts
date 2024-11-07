import { Plugin } from "obsidian";
import { EventGrpcProxy } from "./event-snooping/event-grpc-proxy";
import { ConnectClient } from "./grpc/connect/client";
import { ChannelCredentials } from "@grpc/grpc-js";
import { ConnectRequest, ConnectResponse } from "./grpc/proto/obsidian_connect";

export class FeedManager {
	private connectClient: ConnectClient;
	private eventClient: EventGrpcProxy;
	private shouldSendConnect = true;
	private pollIntervalMs = 1000;
	private request: ConnectRequest;
	private stopping = false;

	constructor(
		plugin: Plugin,
		request: ConnectRequest,
		connectPort: number,
		eventPort: number
	) {
		const createConfig = (port: number) => ({
			address: `localhost:${port}`,
			credentials: ChannelCredentials.createInsecure(),
			verbose: true,
			reconnectDelayMs: this.pollIntervalMs,
		});

		this.request = request;

		this.connectClient = new ConnectClient(
			createConfig(connectPort),
			this.onConnect.bind(this)
		);
		this.eventClient = new EventGrpcProxy(plugin, createConfig(eventPort));
		this.eventClient.startWatching();
		this.eventClient.setOnDisconnect(this.onDisconnect.bind(this));
	}

	start() {
		this.startSendingConnect();
	}

	stop() {
		this.stopping = true;
		this.connectClient.close();
		this.eventClient.close();
	}

	private onConnect(response: ConnectResponse): void {
		if (response.status === ConnectResponse.Status.READY) {
			this.eventClient.connect();
			this.shouldSendConnect = false;
		}
	}

	private onDisconnect() {
		this.eventClient.close();
		if (!this.stopping) {
			this.startSendingConnect();
		}
	}

	private startSendingConnect() {
		this.shouldSendConnect = true;
		this.sendLoop();
	}

	private sendLoop() {
		if (this.shouldSendConnect) {
			this.connectClient.sendRequest(this.request);

			new Promise((resolve) => {
				setTimeout(resolve, this.pollIntervalMs);
			}).then(() => this.sendLoop());
		}
	}
}

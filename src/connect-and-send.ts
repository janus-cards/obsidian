import { Plugin } from "obsidian";
import { EventGrpcProxy } from "./event-snooping/event-grpc-proxy";
import { ConnectClient } from "./grpc/connect/client";
import { ChannelCredentials } from "@grpc/grpc-js";
import { ConnectRequest, ConnectResponse } from "./grpc/proto/obsidian_connect";

/*
States:
- AWAITING_CONNECTION: Sends connect requests
- CONNECTED: Sends events

Transitioning from AWAITING_CONNECTION to CONNECTED turns on event client,
and transitioning from CONNECTED to AWAITING_CONNECTION turns off event client.
*/
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
			verbose: false,
			reconnectDelayMs: this.pollIntervalMs,
		});

		this.request = request;

		this.connectClient = new ConnectClient(
			createConfig(connectPort),
			this.onConnect.bind(this)
		);
		this.connectClient.connect();
		this.eventClient = new EventGrpcProxy(plugin, createConfig(eventPort));
		this.eventClient.startWatching();
		this.eventClient.setOnDisconnect(this.onDisconnect.bind(this));
	}

	start() {
		this.startSendingConnect();
	}

	stop() {
		this.stopping = true;
		this.connectClient.stop();
		this.eventClient.stop();
	}

	private onConnect(response: ConnectResponse): void {
		if (response.status === ConnectResponse.Status.READY) {
			this.eventClient.connect();
			this.shouldSendConnect = false;
		}
	}

	private onDisconnect() {
		this.eventClient.stop();
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

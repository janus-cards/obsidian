import { ChannelCredentials } from "@grpc/grpc-js";
import { Plugin, TAbstractFile } from "obsidian";

import { EventGrpcProxy } from "./event-snooping/event-grpc-proxy";
import { GrpcConfig } from "./grpc/config";
import { ConnectClient } from "./grpc/connect/client";
import { ConnectRequest, ConnectResponse } from "./grpc/proto/obsidian_connect";

/*
Constantly asks the server if it can send events. If it receives a NOT_READY response or an error, it does not stream events.
If it receives a READY response, it streams events.
*/
export class FeedManager {
	private connectClient: ConnectClient;
	private eventClient: EventGrpcProxy;
	private pollIntervalMs = 1000;
	private request: ConnectRequest;
	private stopping = false;

	constructor(
		plugin: Plugin,
		request: ConnectRequest,
		connectPort: number,
		eventPort: number,
		fileFilter?: (file: TAbstractFile) => boolean,
	) {
		const createConfig = (port: number): GrpcConfig => ({
			address: `localhost:${port}`,
			credentials: ChannelCredentials.createInsecure(),
			verbose: false,
			reconnectDelayMs: this.pollIntervalMs,
		});

		this.request = request;

		this.connectClient = new ConnectClient(createConfig(connectPort));
		this.eventClient = new EventGrpcProxy(
			plugin,
			createConfig(eventPort),
			fileFilter,
		);
		this.eventClient.pause();
		this.eventClient.startWatching();
	}

	start(): void {
		this.sendLoop();
	}

	stop(): void {
		this.stopping = true;
		this.connectClient.close();
		this.eventClient.close();
	}

	private onConnectResponse(
		err: Error | null,
		response: ConnectResponse,
	): void {
		if (err) {
			console.error("Error in connect response", err);
			this.eventClient.pause();
			return;
		}
		if (response.status === ConnectResponse.Status.READY) {
			console.log("Ready to send events");
			this.eventClient.resume();
		} else if (response.status === ConnectResponse.Status.NOT_READY) {
			console.log("Not ready to send events");
			this.eventClient.pause();
		}
	}

	private sendLoop(): void {
		if (this.stopping) {
			return;
		}
		this.connectClient.connect(
			this.request,
			this.onConnectResponse.bind(this),
		);

		new Promise((resolve) => {
			setTimeout(resolve, this.pollIntervalMs);
		}).then(() => this.sendLoop());
	}
}

import { Plugin, TFile } from "obsidian";
import { EventGrpcProxy } from "./event-snooping/event-grpc-proxy";
import { ChannelCredentials } from "@grpc/grpc-js";

export default class JanusIntegration extends Plugin {
	private grpcProxy: EventGrpcProxy;

	async onload() {
		await this.loadSettings();

		// TODO: Manage lifetime better.
		// What if it doesn't connect?
		this.grpcProxy = new EventGrpcProxy(this, {
			address: "localhost:50051",
			credentials: ChannelCredentials.createInsecure(),
			verbose: true,
			reconnectDelayMs: 3000,
		});
		this.grpcProxy.watchEvents();
	}

	onunload() {
		this.grpcProxy.close();
	}

	async loadSettings() {}

	async saveSettings() {}
}

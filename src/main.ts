import { Plugin } from "obsidian";
import EventLogger from "./event-logger";
import { EventGrpcProxy } from "./event-grpc-proxy";
import { ChannelCredentials } from "@grpc/grpc-js";

export default class JanusIntegration extends Plugin {
	private logger: EventLogger;
	private grpcProxy: EventGrpcProxy;

	async onload() {
		await this.loadSettings();
		new EventLogger(this);

		this.grpcProxy = new EventGrpcProxy(this, {
			address: "localhost:50051",
			credentials: ChannelCredentials.createInsecure(),
		});
	}

	onunload() {}

	async loadSettings() {}

	async saveSettings() {}
}

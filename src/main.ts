import { Plugin } from "obsidian";
import { FeedManager } from "./connect-and-send";
import { ConnectRequest } from "./grpc/proto/obsidian_connect";

export default class JanusIntegration extends Plugin {
	private feedManager: FeedManager;
	async onload() {
		await this.loadSettings();

		const request = new ConnectRequest({
			// @ts-ignore
			vault_path: this.app.vault.adapter.basePath,
			version: "0.0",
		});
		// TODO: Manage lifetime better.
		// What if it doesn't connect?
		this.feedManager = new FeedManager(this, request, 50051, 50052);
		console.log("Starting feed manager");
		this.feedManager.start();
	}

	onunload() {
		this.feedManager.stop();
	}

	async loadSettings() {}

	async saveSettings() {}
}

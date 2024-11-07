import { GrpcConfig } from "../config";
import { ObsidianConnectClient } from "../proto/obsidian_connect";

export class ConnectClient {
	private client: ObsidianConnectClient;

	constructor(config: GrpcConfig) {
		this.client = new ObsidianConnectClient(
			config.address,
			config.credentials
		);
	}
}

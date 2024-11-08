import { GrpcConfig } from "../config";
import { ObsidianConnectClient } from "../proto/obsidian_connect";

export class ConnectClient extends ObsidianConnectClient {
	constructor(config: GrpcConfig) {
		super(config.address, config.credentials);
	}
}

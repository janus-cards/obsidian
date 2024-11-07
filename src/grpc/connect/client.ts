import { GrpcConfig } from "../config";
import {
	ConnectRequest,
	ConnectResponse,
	ObsidianConnectClient,
} from "../proto/obsidian_connect";
import { ReconnectingClientStream } from "../reconnecting-client";

export class ConnectClient extends ReconnectingClientStream<
	ObsidianConnectClient,
	ConnectRequest,
	ConnectResponse
> {
	constructor(
		config: GrpcConfig,
		onConnectResponse: (response: ConnectResponse) => void
	) {
		super(config, ObsidianConnectClient, "connect");
		this.setResponseHandler(onConnectResponse);
	}

	sendRequest(request: ConnectRequest): void {
		this.getStream().write(request);
	}
}

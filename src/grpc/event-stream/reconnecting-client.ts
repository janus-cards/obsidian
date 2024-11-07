import { ChannelCredentials, ClientWritableStream } from "@grpc/grpc-js";
import {
	CreateEvent,
	DeleteEvent,
	RenameEvent,
	ModifyEvent,
	FileOpenEvent,
	ObsidianEvent,
	ObsidianEventStreamClient,
} from "../proto/obsidian_events";
import { CamelCase, KebabCase } from "@/include/strings/case-conversion";

import { ConnectivityState } from "@grpc/grpc-js/build/src/connectivity-state";

export type GrpcConfig = {
	address: string;
	credentials: ChannelCredentials;
	verbose: boolean;
	reconnectDelayMs: number;
};

/*
  For all events listened to, forward these on via grpc
*/
type EventNameToProtoMap = {
	create: CreateEvent;
	delete: DeleteEvent;
	rename: RenameEvent;
	modify: ModifyEvent;
	"file-open": FileOpenEvent;
};

export type ConnectionState = "Unconnected" | "Connecting" | "Connected";

export class ReconnectingEventStreamClient {
	private client: ObsidianEventStreamClient;
	private stream: ClientWritableStream<ObsidianEvent>;
	private grpcConfig: GrpcConfig;

	constructor(grpcConfig: GrpcConfig) {
		this.grpcConfig = grpcConfig;
	}

	connect() {
		this.client = new ObsidianEventStreamClient(
			this.grpcConfig.address,
			this.grpcConfig.credentials
		);

		const handler = (err: Error | null) => {
			if (err) {
				this.retryConnect();
			}
		};
		this.stream = this.client.streamEvents(handler.bind(this));
	}

	sendRequest<Name extends EventName>(
		name: Name,
		event: EventNameToProtoMap[Name]
	): void {
		// Get timestamp
		const timestamp = Date.now();
		// Create request
		// Names which are multiple words need to be camelCase in the proto
		const protoName = CamelCase.style(KebabCase.unstyle(name));
		const obsidianEvent = new ObsidianEvent({
			timestamp,
			[protoName]: event,
		});
		// Log event
		if (this.grpcConfig.verbose) {
			console.log("Sending event", obsidianEvent);
		}
		// Send request
		this.stream.write(obsidianEvent);
	}
	private retryConnect() {
		setTimeout(() => {
			this.connect();
		}, this.grpcConfig.reconnectDelayMs);
	}

	close() {
		if (this.stream) {
			this.stream.end();
		}
		if (this.client) {
			this.client.close();
		}
	}

	// Add getter for connection state
	getConnectionState(): ConnectionState {
		switch (this.client.getChannel().getConnectivityState(false)) {
			case ConnectivityState.IDLE:
				return "Unconnected";
			case ConnectivityState.CONNECTING:
				return "Connecting";
			case ConnectivityState.READY:
				return "Connected";
			default:
				return "Unconnected";
		}
	}
}

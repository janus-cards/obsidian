import {
	CreateEvent,
	DeleteEvent,
	RenameEvent,
	ModifyEvent,
	FileOpenEvent,
	ObsidianEvent,
	ObsidianEventStreamClient,
	Empty,
} from "../proto/obsidian_events";
import { CamelCase, KebabCase } from "@/include/strings/case-conversion";
import { GrpcConfig } from "../config";
import { ClientWritableStream } from "@grpc/grpc-js";
import { ConnectivityState } from "@grpc/grpc-js/build/src/connectivity-state";

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

export class EventStreamClient {
	private client: ObsidianEventStreamClient;
	private verbose = false;
	private stream: ClientWritableStream<ObsidianEvent> | null = null;
	private onError?: (err: Error) => void;
	constructor(grpcConfig: GrpcConfig, onError?: (err: Error) => void) {
		this.onError = onError;
		this.client = new ObsidianEventStreamClient(
			grpcConfig.address,
			grpcConfig.credentials
		);
	}

	// Does nothing if the stream is not connected
	sendRequest<Name extends EventName>(
		name: Name,
		event: EventNameToProtoMap[Name]
	): void {
		const sendRequestOnStream = () => {
			if (!this.stream) {
				throw new Error("Stream must be setup before sending requests");
			}
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
			if (this.verbose) {
				console.log("Sending event", obsidianEvent);
			}
			// Send request
			this.stream.write(obsidianEvent);
		};
		// Check if we are already connected
		if (
			this.client.getChannel().getConnectivityState(false) ===
			ConnectivityState.READY
		) {
			sendRequestOnStream();
			return;
		} else {
			// Do the first connect
			this.client.waitForReady(Date.now() + 1000, (err) => {
				if (err) {
					console.error("Event stream not connected", err);
					this.onError?.(err);
					return;
				}

				this.setupStream();

				sendRequestOnStream();
			});
		}
	}
	private setupStream() {
		const wrappedCallback = (err: Error | null, response: Empty) => {
			if (err) {
				console.error("Error in event stream callback", err);
				this.onError?.(err);
				return;
			}
		};
		this.stream = this.client.streamEvents(wrappedCallback.bind(this));
	}
	close() {
		this.stream?.end();
		this.client.close();
	}
}

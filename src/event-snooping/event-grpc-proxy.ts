import { Plugin, TAbstractFile } from "obsidian";
import EventWatcher from "./event-watcher";
import {
	CreateEvent,
	DeleteEvent,
	RenameEvent,
	ModifyEvent,
	FileOpenEvent,
	ObsidianEventStreamClient,
	ObsidianEvent,
} from "@/grpc/proto/obsidian_events";
import { ChannelCredentials, ClientWritableStream } from "@grpc/grpc-js";
import { ConnectivityState } from "@grpc/grpc-js/build/src/connectivity-state";
import { CamelCase, KebabCase } from "@/include/strings/case-conversion";

type GrpcConfig = {
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

type ConnectionState = "Unconnected" | "Connecting" | "Connected";

export class EventGrpcProxy extends EventWatcher {
	private client: ObsidianEventStreamClient;
	private stream: ClientWritableStream<ObsidianEvent>;
	private connectionState: ConnectionState = "Unconnected";
	private grpcConfig: GrpcConfig;

	constructor(plugin: Plugin, grpcConfig: GrpcConfig) {
		super(plugin);
		this.grpcConfig = grpcConfig;
		this.connectEventStream();
	}

	close() {
		if (this.stream) {
			this.stream.end();
		}
		if (this.client) {
			this.client.close();
		}
	}

	private connectEventStream() {
		this.client = new ObsidianEventStreamClient(
			this.grpcConfig.address,
			this.grpcConfig.credentials
		);

		const handler = (err: Error | null) => {
			if (err) {
				this.retryConnection();
			}
		};
		this.stream = this.client.streamEvents(handler.bind(this));
	}

	private retryConnection() {
		setTimeout(() => {
			this.connectEventStream();
		}, this.grpcConfig.reconnectDelayMs);
	}

	private sendRequest<Name extends EventName>(
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

	protected onCreate(file: TAbstractFile): void {
		const event = new CreateEvent({ filePath: file.path });
		this.sendRequest("create", event);
	}

	protected onDelete(file: TAbstractFile): void {
		const event = new DeleteEvent({ filePath: file.path });
		this.sendRequest("delete", event);
	}

	protected onRename(file: TAbstractFile, oldPath: string): void {
		const event = new RenameEvent({
			newPath: file.path,
			oldPath,
		});
		this.sendRequest("rename", event);
	}

	protected onModify(file: TAbstractFile): void {
		const event = new ModifyEvent({ filePath: file.path });
		this.sendRequest("modify", event);
	}

	protected onFileOpen(file: TAbstractFile | null): void {
		// Only send event if file is not null
		// I believe null file means it has been closed but not sure.
		if (file) {
			const event = new FileOpenEvent({ filePath: file.path });
			this.sendRequest("file-open", event);
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

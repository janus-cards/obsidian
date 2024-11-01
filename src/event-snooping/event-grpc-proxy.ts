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
} from "@/proto/obsidan-events";
import { ChannelCredentials, ClientWritableStream } from "@grpc/grpc-js";

type GrpcConfig = {
	address: string;
	credentials: ChannelCredentials;
};

/*
  For all events listened to, forward these on via grpc
*/
type EventNameToProtoMap = {
	create: CreateEvent;
	delete: DeleteEvent;
	rename: RenameEvent;
	modify: ModifyEvent;
	file_open: FileOpenEvent;
};

export class EventGrpcProxy extends EventWatcher {
	private client: ObsidianEventStreamClient;
	private stream: ClientWritableStream<ObsidianEvent>;

	constructor(plugin: Plugin, grpc_config: GrpcConfig) {
		super(plugin);
		this.initEventStream(grpc_config);
	}

	close() {
		if (this.stream) {
			this.stream.end();
		}
		if (this.client) {
			this.client.close();
		}
	}

	private initEventStream(grpc_config: GrpcConfig) {
		this.client = new ObsidianEventStreamClient(
			grpc_config.address,
			grpc_config.credentials
		);

		this.stream = this.client.streamEvents((err, value) => {
			if (err) {
				console.error(err);
			}
		});
	}

	private sendRequest<Name extends EventName>(
		name: Name,
		event: EventNameToProtoMap[Name]
	): void {
		// Get timestamp
		const timestamp = Date.now();
		// Create request
		const obsidianEvent = new ObsidianEvent({ timestamp, [name]: event });
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
			this.sendRequest("file_open", event);
		}
	}
}

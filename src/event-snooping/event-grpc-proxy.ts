import { Plugin, TAbstractFile } from "obsidian";
import EventWatcher from "./event-watcher";

import {
	ConnectionState,
	EventStreamClient,
} from "@/grpc/event-stream/reconnecting-client";
import { GrpcConfig } from "@/grpc/config";
import {
	CreateEvent,
	DeleteEvent,
	RenameEvent,
	ModifyEvent,
	FileOpenEvent,
} from "@/grpc/proto/obsidian_events";

export class EventGrpcProxy extends EventWatcher {
	private client: EventStreamClient;

	constructor(plugin: Plugin, grpcConfig: GrpcConfig) {
		super(plugin);
		this.client = new EventStreamClient(grpcConfig);
	}

	connect() {
		this.client.connect();
	}

	close() {
		this.client.close();
	}

	getConnectionState(): ConnectionState {
		return this.client.getConnectionState();
	}

	protected onCreate(file: TAbstractFile): void {
		const event = new CreateEvent({ filePath: file.path });
		this.client.sendRequest("create", event);
	}

	protected onDelete(file: TAbstractFile): void {
		const event = new DeleteEvent({ filePath: file.path });
		this.client.sendRequest("delete", event);
	}

	protected onRename(file: TAbstractFile, oldPath: string): void {
		const event = new RenameEvent({
			newPath: file.path,
			oldPath,
		});
		this.client.sendRequest("rename", event);
	}

	protected onModify(file: TAbstractFile): void {
		const event = new ModifyEvent({ filePath: file.path });
		this.client.sendRequest("modify", event);
	}

	protected onFileOpen(file: TAbstractFile | null): void {
		// Only send event if file is not null
		// I believe null file means it has been closed but not sure.
		if (file) {
			const event = new FileOpenEvent({ filePath: file.path });
			this.client.sendRequest("file-open", event);
		}
	}
}

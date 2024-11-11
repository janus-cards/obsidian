import { Plugin, TAbstractFile } from "obsidian";
import EventWatcher from "./event-watcher";

import {
	EventNameToProtoMap,
	EventStreamClient,
} from "@/grpc/event-stream/client";
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
	private paused = false;

	constructor(
		plugin: Plugin,
		grpcConfig: GrpcConfig,
		onError?: (err: Error) => void
	) {
		super(plugin);
		this.client = new EventStreamClient(grpcConfig, onError);
	}

	pause() {
		this.paused = true;
	}

	resume() {
		this.paused = false;
	}

	close() {
		this.client.close();
	}

	private sendEvent<Name extends EventName>(
		name: Name,
		event: EventNameToProtoMap[Name]
	) {
		if (!this.paused) {
			this.client.sendRequest(name, event);
		}
	}

	protected onCreate(file: TAbstractFile): void {
		const event = new CreateEvent({ filePath: file.path });
		this.sendEvent("create", event);
	}

	protected onDelete(file: TAbstractFile): void {
		const event = new DeleteEvent({ filePath: file.path });
		this.sendEvent("delete", event);
	}

	protected onRename(file: TAbstractFile, oldPath: string): void {
		const event = new RenameEvent({
			newPath: file.path,
			oldPath,
		});
		this.sendEvent("rename", event);
	}

	protected onModify(file: TAbstractFile): void {
		const event = new ModifyEvent({ filePath: file.path });
		this.sendEvent("modify", event);
	}

	protected onFileOpen(file: TAbstractFile | null): void {
		// Only send event if file is not null
		// I believe null file means it has been closed but not sure.
		if (file) {
			const event = new FileOpenEvent({ filePath: file.path });
			this.sendEvent("file-open", event);
		}
	}
}

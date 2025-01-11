import { Plugin, TAbstractFile } from "obsidian";

import { GrpcConfig } from "@/grpc/config";
import {
	EventNameToProtoMap,
	EventStreamClient,
} from "@/grpc/event-stream/client";
import {
	CreateEvent,
	DeleteEvent,
	RenameEvent,
	ModifyEvent,
	FileOpenEvent,
} from "@/grpc/proto/obsidian_events";

import EventWatcher from "./event-watcher";

export class EventGrpcProxy extends EventWatcher {
	private client: EventStreamClient;
	private paused = false;
	private fileFilter?: (file: TAbstractFile) => boolean;
	constructor(
		plugin: Plugin,
		grpcConfig: GrpcConfig,
		fileFilter?: (file: TAbstractFile) => boolean,
		onError?: (err: Error) => void,
	) {
		super(plugin);
		this.fileFilter = fileFilter;
		this.client = new EventStreamClient(grpcConfig, onError);
	}

	pause(): void {
		this.paused = true;
	}

	resume(): void {
		this.paused = false;
	}

	close(): void {
		this.client.close();
	}

	private sendEvent<Name extends EventName>(
		name: Name,
		event: EventNameToProtoMap[Name],
		file: TAbstractFile,
	): void {
		const shouldSend = this.fileFilter?.(file) ?? true;
		if (!this.paused && shouldSend) {
			this.client.sendRequest(name, event);
		}
	}

	protected onCreate(file: TAbstractFile): void {
		const event = new CreateEvent({ filePath: file.path });
		this.sendEvent("create", event, file);
	}

	protected onDelete(file: TAbstractFile): void {
		const event = new DeleteEvent({ filePath: file.path });
		this.sendEvent("delete", event, file);
	}

	protected onRename(file: TAbstractFile, oldPath: string): void {
		const event = new RenameEvent({
			newPath: file.path,
			oldPath,
		});
		this.sendEvent("rename", event, file);
	}

	protected onModify(file: TAbstractFile): void {
		const event = new ModifyEvent({ filePath: file.path });
		this.sendEvent("modify", event, file);
	}

	protected onFileOpen(file: TAbstractFile | null): void {
		// Only send event if file is not null
		// I believe null file means it has been closed but not sure.
		if (file) {
			const event = new FileOpenEvent({ filePath: file.path });
			this.sendEvent("file-open", event, file);
		}
	}
}

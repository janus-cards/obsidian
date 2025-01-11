import type { TAbstractFile } from "obsidian";

import {
	CreateEvent,
	DeleteEvent,
	RenameEvent,
	FileOpenEvent,
	ModifyEvent,
} from "@/grpc/proto/obsidian_events";

declare global {
	type Events =
		| CreateEvent
		| DeleteEvent
		| RenameEvent
		| ModifyEvent
		| FileOpenEvent;
	type EventName = "create" | "delete" | "rename" | "modify" | "file-open";
	type EventCallback = {
		create: (file: TAbstractFile) => void;
		delete: (file: TAbstractFile) => void;
		rename: (file: TAbstractFile, oldPath: string) => void;
		modify: (file: TAbstractFile) => void;
		"file-open": (file: TAbstractFile | null) => void;
	};
	type EventCallbackMap = {
		[E in EventName]: EventCallback[E];
	};
}

// Ensure the file is treated as a module
export {};

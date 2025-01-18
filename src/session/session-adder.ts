import { Plugin, TAbstractFile } from "obsidian";

import EventWatcher from "@/event-snooping/event-watcher";

import SessionManager from "./session-manager";

export default class SessionAdder extends EventWatcher {
	private sessionManager: SessionManager;
	private filter?: (file: TAbstractFile) => boolean;
	constructor(
		plugin: Plugin,
		sessionManager: SessionManager,
		filter?: (file: TAbstractFile) => boolean,
	) {
		super(plugin);
		this.sessionManager = sessionManager;
		this.filter = filter;
	}

	onCreate(file: TAbstractFile): void {
		this.add(file, "");
	}

	onDelete(file: TAbstractFile): void {
		this.sessionManager.current().remove(file);
	}

	onRename(file: TAbstractFile, oldPath: string): void {
		this.remove(oldPath);
		this.add(file);
	}

	onModify(file: TAbstractFile): void {
		this.add(file);
	}

	onFileOpen(file: TAbstractFile | null): void {
		console.log("onFileOpen", file);
		if (file) {
			this.add(file);
		}
	}

	private add(file: TAbstractFile, content?: string): void {
		if (!this.filter || this.filter(file)) {
			this.sessionManager.current().add(file.path, content);
		}
	}
	private remove(file: string): void {
		this.sessionManager.current().remove(file);
	}
}

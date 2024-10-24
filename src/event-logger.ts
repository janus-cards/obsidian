import { TAbstractFile } from "obsidian";
import EventWatcher from "./event-watcher";

export default class EventLogger extends EventWatcher {
	protected onCreate(file: TAbstractFile): void {
		console.log("onCreate", file);
	}

	protected onDelete(file: TAbstractFile): void {
		console.log("onDelete", file);
	}

	protected onRename(file: TAbstractFile, oldPath: string): void {
		console.log("onRename", file, oldPath);
	}

	protected onModify(file: TAbstractFile): void {
		console.log("onModify", file);
	}

	protected onFileOpen(file: TAbstractFile | null): void {
		console.log("onFileOpen", file);
	}
}

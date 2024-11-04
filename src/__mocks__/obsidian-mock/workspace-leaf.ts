import { TFile } from "obsidian";
import { EventManager } from "./events";

export class WorkspaceLeaf {
	private eventManager: EventManager;

	constructor(eventManager: EventManager) {
		this.eventManager = eventManager;
	}

	openFile(file: TFile) {
		this.eventManager.signalEvent("file-open", file);
	}
}

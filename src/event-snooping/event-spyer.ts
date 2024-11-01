import { jest } from "@jest/globals";
import EventWatcher from "./event-watcher";
import { Plugin, TAbstractFile } from "obsidian";

export class EventSpyer extends EventWatcher {
	constructor(plugin: Plugin) {
		super(plugin);
	}

	onCreate: jest.Mock<(file: TAbstractFile) => void> = jest.fn();

	onDelete: jest.Mock<(file: TAbstractFile) => void> = jest.fn();

	onRename: jest.Mock<(file: TAbstractFile, oldPath: string) => void> =
		jest.fn();

	onModify: jest.Mock<(file: TAbstractFile) => void> = jest.fn();

	onFileOpen: jest.Mock<(file: TAbstractFile | null) => void> = jest.fn();
}

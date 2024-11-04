import { EventManager, EventRef } from "./events";
import { InMemoryFileStore } from "./file-store";
import { TFile } from "./files";

export interface VaultConfig {
	folder: string;
}

/*
A Vault that loads files from a folder into memory and then manipulates them without saving them back to disk.
Lazily loads files so assumes the files do not change during the test.
*/
export class Vault {
	private eventManager: EventManager;

	private fileStore: InMemoryFileStore;

	constructor(eventManager: EventManager, config: VaultConfig) {
		this.eventManager = eventManager;
		this.fileStore = new InMemoryFileStore(config.folder);
	}

	async load() {
		await this.openVault();
	}

	async openVault() {
		// Obsidian gets all the files in the vault and "creates" them
		const files = await this.fileStore.getAllFiles();
		const filesAsTFiles = files.map((file) => new TFile(file));
		for (const file of filesAsTFiles) {
			this.eventManager.signalEvent("create", file);
		}
	}

	on<E extends EventName>(name: E, callback: EventCallback[E]): EventRef<E> {
		return { eventName: name, callback };
	}

	async create(path: string, data: string): Promise<TFile> {
		await this.fileStore.createFile(path, data);
		// Emit create event
		const file = new TFile(path);
		this.eventManager.signalEvent("create", file);
		return file;
	}

	async delete(file: TFile) {
		await this.fileStore.deleteFile(file.path);
		this.eventManager.signalEvent("delete", file);
	}

	async rename(file: TFile, newPath: string) {
		await this.fileStore.renameFile(file.path, newPath);
		this.eventManager.signalEvent("rename", new TFile(newPath), file.path);
	}

	async exists(path: string) {
		return this.fileStore.fileExists(path);
	}

	async read(file: TFile): Promise<string> {
		return this.fileStore.readFile(file.path);
	}

	async modify(file: TFile, data: string) {
		await this.fileStore.modifyFile(file.path, data);
		this.eventManager.signalEvent("modify", file);
	}
}

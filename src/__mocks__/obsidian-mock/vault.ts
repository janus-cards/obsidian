import { EventManager } from "./events";
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
	eventManager: EventManager;

	fileStore: InMemoryFileStore;

	constructor(eventManager: EventManager, config: VaultConfig) {
		this.eventManager = eventManager;
		this.fileStore = new InMemoryFileStore(config.folder);
	}

	on<E extends EventName>(name: E, callback: EventCallback[E]) {
		return this.eventManager.addListener({ eventName: name, callback });
	}

	/*
	A decorator that ensures any touched file is loaded into memory.
	*/

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
		this.eventManager.signalEvent("rename", file, file.path);
	}
}

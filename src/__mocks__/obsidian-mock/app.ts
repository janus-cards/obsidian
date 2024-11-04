import { EventManager } from "./events";
import { Plugin } from "./plugin";
import { Vault } from "./vault";
import { Workspace } from "./workspace";

export class App {
	eventManager: EventManager;

	vault: Vault;
	workspace: Workspace;

	constructor(folder: string) {
		this.eventManager = new EventManager();
		this.vault = new Vault(this.eventManager, { folder });
		this.workspace = new Workspace(this.eventManager);
	}

	createPlugin() {
		return new Plugin(this);
	}

	async load() {
		await this.vault.load();
	}
}

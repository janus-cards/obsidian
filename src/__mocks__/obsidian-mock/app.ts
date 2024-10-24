import { EventManager } from "./events";
import { Vault } from "./vault";

export class App {
	eventManager: EventManager;

	vault: Vault;

	constructor(folder: string) {
		this.eventManager = new EventManager();
		this.vault = new Vault(this.eventManager, { folder });
	}
}

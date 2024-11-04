import { EventManager, EventRef } from "./events";
import { WorkspaceLeaf } from "./workspace-leaf";

export class Workspace {
	private eventManager: EventManager;

	constructor(eventManager: EventManager) {
		this.eventManager = eventManager;
	}

	on<E extends EventName>(name: E, callback: EventCallback[E]): EventRef<E> {
		return { eventName: name, callback };
	}

	getLeaf(type: "split" | "tab", mode: "left" | "right"): WorkspaceLeaf {
		return new WorkspaceLeaf(this.eventManager);
	}
}

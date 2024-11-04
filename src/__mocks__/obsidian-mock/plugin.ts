import { App } from "./app";
import { EventRef } from "./events";

export class Plugin {
	app: App;

	constructor(app: App) {
		this.app = app;
	}

	registerEvent<E extends EventName>(event: EventRef<E>) {
		this.app.eventManager.addListener(event);
	}
}

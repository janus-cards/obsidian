import { EventRef } from "./events";

export class Workspace {
	on<E extends EventName>(name: E, callback: EventCallback[E]): EventRef<E> {
		return { eventName: name, callback };
	}
}

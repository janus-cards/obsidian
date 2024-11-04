// TODO: Type this better

import { TAbstractFile } from "./files";

type MockedEventCallbacks = {
	create: (file: TAbstractFile) => void;
	delete: (file: TAbstractFile) => void;
	rename: (file: TAbstractFile, oldPath: string) => void;
	modify: (file: TAbstractFile) => void;
	"file-open": (file: TAbstractFile | null) => void;
};

// Unlike the real Obsidian API, this is typed with a discriminated union
export class EventRef<E extends EventName> {
	eventName: E;
	callback: MockedEventCallbacks[E];
}

export type ListenerMap = {
	[E in EventName]?: MockedEventCallbacks[E][];
};

export class EventManager {
	listeners: ListenerMap = {};

	addListener<E extends EventName>(event: EventRef<E>) {
		const { eventName, callback } = event;
		if (!this.listeners[eventName]) {
			this.listeners[eventName] = [];
		}

		this.listeners[eventName]!.push(callback);
	}

	signalEvent<E extends EventName>(
		eventName: E,
		...data: Parameters<MockedEventCallbacks[E]>
	) {
		if (!this.listeners[eventName]) {
			return;
		}
		// @ts-expect-error
		this.listeners[eventName].forEach((callback) => callback(...data));
	}
}

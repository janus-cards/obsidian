import { EventRef, Plugin, TAbstractFile } from "obsidian";

type EventCreationMap = {
	[E in EventName]: (callback: EventCallback[E]) => EventRef;
};

/*
  A convenient way to connect event handlers to the listening mechanism in Obsidian.
  This base class performs the creation and registration of EventRefs, while the
  subclasses implement the actual event handling logic for each event type.
 */
export default abstract class EventWatcher {
	private readonly plugin: Plugin;

	private eventCreationOverloads: EventCreationMap = {
		create: (callback) => this.plugin.app.vault.on("create", callback),
		delete: (callback) => this.plugin.app.vault.on("delete", callback),
		rename: (callback) => this.plugin.app.vault.on("rename", callback),
		modify: (callback) => this.plugin.app.vault.on("modify", callback),
		"file-open": (callback) =>
			this.plugin.app.workspace.on("file-open", callback),
	};

	constructor(plugin: Plugin) {
		this.plugin = plugin;
	}

	private getOverloads(): EventCallbackMap {
		// Cannot create a property initialized to this because the derived class is
		// not yet initialized at the time that this class i
		return {
			create: this.onCreate.bind(this),
			delete: this.onDelete.bind(this),
			rename: this.onRename.bind(this),
			modify: this.onModify.bind(this),
			"file-open": this.onFileOpen.bind(this),
		};
	}

	public startWatching(): void {
		const overloads = this.getOverloads();
		for (const eventName in overloads) {
			const eventType = eventName as EventName;
			this.registerEvent(eventType, overloads[eventType]);
		}
	}

	private registerEvent<E extends EventName>(
		eventType: E,
		callback: EventCallback[E],
	): void {
		// https://docs.obsidian.md/Plugins/Guides/Optimizing+plugin+load+time#Option%20B.%20Register%20the%20handler%20once%20the%20layout%20is%20ready
		// This ensures that we don't listen to all the create events on start
		this.plugin.app.workspace.onLayoutReady(() => {
			const eventRef = this.eventCreationOverloads[eventType](callback);
			this.plugin.registerEvent(eventRef);
		});
	}

	// Customization points
	protected abstract onCreate(file: TAbstractFile): void;
	protected abstract onDelete(file: TAbstractFile): void;
	protected abstract onRename(file: TAbstractFile, oldPath: string): void;
	protected abstract onModify(file: TAbstractFile): void;
	protected abstract onFileOpen(file: TAbstractFile | null): void;
}

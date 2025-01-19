import { randomUUID, UUID } from "crypto";
import { EventEmitter } from "events";
import fs from "fs";
import path from "path";

export default class CurrentSessionManager {
	private session: ObsidianSession | null = null;
	private eventEmitter: EventEmitter = new EventEmitter();
	private vaultFolder: string;

	constructor(vaultFolder: string) {
		this.vaultFolder = vaultFolder;
	}

	on(
		event: "updateCurrentSession",
		listener: (session: ObsidianSession) => void,
	): void {
		this.eventEmitter.on(event, listener);
	}

	startSession(): ObsidianSession {
		const id = this.generatedId();
		this.session = {
			version: 1,
			id,
			info: {
				name: "In Progress",
				startTimestamp: Date.now(),
				vaultFolder: this.vaultFolder,
			},
			contents: {
				startSnapshots: {},
				endSnapshots: {},
			},
		};
		this.emitUpdateCurrentSession();
		return this.session;
	}

	getCurrentSession(): ObsidianSession | null {
		return this.session;
	}

	setCurrentSessionName(name: string): void {
		const session = this.requireSession();
		session.info.name = name;
		this.emitUpdateCurrentSession();
	}

	resetSession(): void {
		if (!this.session) {
			return;
		}
		this.session.info.startTimestamp = Date.now();
		this.session.contents.startSnapshots = {};
		this.emitUpdateCurrentSession();
	}

	finishSession(): ObsidianSession {
		const session = this.requireSession();
		session.info.endTimestamp = Date.now();

		session.contents.endSnapshots = Object.entries(
			session.contents.startSnapshots,
		).reduce((acc, [filePath]) => {
			const fullPath = path.join(session.info.vaultFolder, filePath);
			const endContents = fs.readFileSync(fullPath, "utf8");
			acc[filePath] = endContents;
			return acc;
		}, {} as FileSnapshots);

		this.session = null;
		this.emitUpdateCurrentSession();

		return session;
	}

	addToSession(viewedFilePath: string, contents?: string): void {
		const session = this.requireSession();
		// If this is the first time viewing the file, add it to the start snapshots
		const startSnapshot = session.contents.startSnapshots[viewedFilePath];
		if (!startSnapshot) {
			console.log("Adding to start snapshots", viewedFilePath);
			const fullPath = path.join(
				session.info.vaultFolder,
				viewedFilePath,
			);
			const startContents = contents || fs.readFileSync(fullPath, "utf8");
			session.contents.startSnapshots[viewedFilePath] = startContents;
		}
		this.emitUpdateCurrentSession();
	}

	renameSession(name: string): void {
		const session = this.requireSession();
		session.info.name = name;
		this.emitUpdateCurrentSession();
	}

	removeFromSession(viewedFilePath: string): void {
		const session = this.requireSession();
		console.log("Removing from session", viewedFilePath);
		delete session.contents.startSnapshots[viewedFilePath];
		this.emitUpdateCurrentSession();
	}

	private requireSession(): ObsidianSession {
		if (!this.session) {
			return this.startSession();
		}
		return this.session;
	}

	private emitUpdateCurrentSession(): void {
		this.eventEmitter.emit("updateCurrentSession", this.session);
	}

	private generatedId(): UUID {
		// RANDOM HASH
		return randomUUID();
	}
}

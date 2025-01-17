import fs from "fs";
import { EventEmitter } from "node:events";
import path from "node:path";

export default class PastSessionsManager {
	private sessions: ObsidianSession[] = [];
	private eventEmitter: EventEmitter = new EventEmitter();
	private readonly sessionName = "sessions.json";
	private sessionPath: string | null = null;

	on(
		event: "updatePastSessions",
		listener: (sessions: ObsidianSession[]) => void,
	): void {
		this.eventEmitter.on(event, listener);
	}

	setSessionDir(sessionDir: string): void {
		this.sessionPath = path.join(sessionDir, this.sessionName);
	}

	getHighestId(): number {
		return this.sessions.reduce((max, session) => {
			return Math.max(max, session.id);
		}, 0);
	}

	addSession(session: ObsidianSession): void {
		this.sessions.push(session);
		this.saveSessions();
		this.emitUpdatePastSessions();
	}

	getSessions(): ObsidianSession[] {
		return this.sessions;
	}

	deleteSession(id: number): void {
		this.sessions = this.sessions.filter((session) => session.id !== id);
		this.saveSessions();
		this.emitUpdatePastSessions();
	}

	loadSessions(): void {
		if (!fs.existsSync(this.requireSessionPath())) {
			return;
		}
		const sessions = fs.readFileSync(this.requireSessionPath(), "utf8");
		this.sessions = JSON.parse(sessions);
		this.emitUpdatePastSessions();
	}

	saveSessions(): void {
		fs.writeFileSync(
			this.requireSessionPath(),
			JSON.stringify(this.sessions, null, 2),
		);
	}

	private requireSessionPath(): string {
		if (!this.sessionPath) {
			throw new Error("No session path set");
		}
		return this.sessionPath;
	}

	private emitUpdatePastSessions(): void {
		this.eventEmitter.emit("updatePastSessions", this.sessions);
	}
}

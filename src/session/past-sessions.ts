import { UUID } from "crypto";
import { EventEmitter } from "events";
import fs from "fs";
import path from "path";

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

	addSession(session: ObsidianSession): void {
		this.sessions.push(session);
		this.saveSessions();
		this.emitUpdatePastSessions();
	}

	getSessions(): ObsidianSession[] {
		return this.sessions;
	}

	deleteSession(id: UUID): void {
		this.sessions = this.sessions.filter((session) => session.id !== id);
		this.saveSessions();
		this.emitUpdatePastSessions();
	}

	loadSessions(): void {
		const sessionPath = this.requireSessionPath();
		if (!fs.existsSync(sessionPath)) {
			return;
		}
		const sessions = fs.readFileSync(sessionPath, "utf8");
		this.sessions = JSON.parse(sessions);
		this.emitUpdatePastSessions();
	}

	saveSessions(): void {
		const sessionPath = this.requireSessionPath();
		// If folder doesn't exist, create it
		if (!fs.existsSync(path.dirname(sessionPath))) {
			fs.mkdirSync(path.dirname(sessionPath), { recursive: true });
		}
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

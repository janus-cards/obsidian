import { UUID } from "crypto";

import CurrentSessionManager from "./current-session";
import PastSessionsManager from "./past-sessions";

// TODO: Delete?
export default class SessionManager {
	private currentSessionManager: CurrentSessionManager;
	private pastSessionsManager: PastSessionsManager;

	constructor(vaultPath: string) {
		this.currentSessionManager = new CurrentSessionManager(vaultPath);
		this.pastSessionsManager = new PastSessionsManager();
	}

	start(sessionDir: string): void {
		this.pastSessionsManager.setSessionDir(sessionDir);
		this.pastSessionsManager.loadSessions();
	}

	find(id: UUID): ObsidianSession | undefined {
		// Check if the currentSession is the id
		const currentSession = this.currentSessionManager.getCurrentSession();
		if (currentSession && currentSession.id === id) {
			return currentSession;
		}
		return this.pastSessionsManager
			.getSessions()
			.find((session) => session.id === id);
	}

	current() {
		// Narrow interface
		const m = this.currentSessionManager;
		return {
			add: m.addToSession.bind(m),
			remove: m.removeFromSession.bind(m),
			reset: m.resetSession.bind(m),
			setName: m.setCurrentSessionName.bind(m),
			finish: m.finishSession.bind(m),
		};
	}

	past() {
		const m = this.pastSessionsManager;
		return {
			add: m.addSession.bind(m),
			delete: m.deleteSession.bind(m),
		};
	}

	on(
		event: "updateCurrentSession" | "updatePastSessions",
		listener: (...args: unknown[]) => void,
	): void {
		if (event === "updateCurrentSession") {
			this.currentSessionManager.on(event, listener);
		} else if (event === "updatePastSessions") {
			this.pastSessionsManager.on(event, listener);
		}
	}
}

import CurrentSessionManager from "./current-session";
import PastSessionsManager from "./past-sessions";

export default class SessionManager {
	private currentSessionManager: CurrentSessionManager;
	private pastSessionsManager: PastSessionsManager;
	private lastId: number | null = null;

	constructor() {
		this.currentSessionManager = new CurrentSessionManager();
		this.pastSessionsManager = new PastSessionsManager();
	}

	start(sessionDir: string): void {
		this.pastSessionsManager.setSessionDir(sessionDir);
		this.pastSessionsManager.loadSessions();
		this.lastId = this.pastSessionsManager.getHighestId();
	}

	startSession(vaultPath: string): void {
		const id = this.requireNextId();
		this.currentSessionManager.startSession(vaultPath, id);
		this.lastId = id;
	}

	find(id: number): ObsidianSession | undefined {
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

	private requireNextId(): number {
		if (this.lastId === null) {
			throw new Error("No last id set");
		}
		return this.lastId + 1;
	}
}

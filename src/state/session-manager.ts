import SessionManager from "@/session/session-manager";

const m: {
	sessionManager: SessionManager | null;
} = {
	sessionManager: null,
};

export function getSessionManager(): SessionManager {
	if (!m.sessionManager) {
		throw new Error("Session manager not initialized");
	}
	return m.sessionManager;
}
export function setSessionManager(sessionManager: SessionManager) {
	m.sessionManager = sessionManager;
}

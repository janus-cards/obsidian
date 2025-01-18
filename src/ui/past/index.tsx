import { usePastSession } from "@/state/past-session";
import { getSessionManager } from "@/state/session-manager";

import SessionList from "./session-list";

export default function PastSessions() {
	const { sessions } = usePastSession();

	const onSelect = (session: ObsidianSession) => {
		console.log(session);
	};

	const onDelete = (session: ObsidianSession) => {
		console.log(session);

		const manager = getSessionManager();
		manager.past().delete(session.id);
	};

	return (
		<div>
			<h1>Past Sessions</h1>
			<SessionList
				sessions={sessions}
				onSelect={onSelect}
				onDelete={onDelete}
			/>
		</div>
	);
}

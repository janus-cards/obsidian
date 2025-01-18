import { usePastSession } from "@/state/past-session";

import SessionList from "./session-list";

export default function PastSessions() {
	const { sessions } = usePastSession();

	const onSelect = (session: ObsidianSession) => {
		console.log(session);
	};

	return (
		<div>
			<h1>Past Sessions</h1>
			<SessionList sessions={sessions} onSelect={onSelect} />
		</div>
	);
}

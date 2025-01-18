import { useCallback, useState } from "react";

import { usePastSession } from "@/state/past-session";
import { getSessionManager } from "@/state/session-manager";

import PastSession from "./session";
import SessionList from "./session-list";

export default function PastSessions() {
	const { sessions } = usePastSession();

	const [pastSessionInView, setPastSessionInView] =
		useState<ObsidianSession | null>(null);

	const onDelete = (session: ObsidianSession) => {
		console.log(session);

		const manager = getSessionManager();
		manager.past().delete(session.id);
	};

	const goBack = useCallback(() => {
		setPastSessionInView(null);
	}, [setPastSessionInView]);

	return (
		<div>
			{pastSessionInView ? (
				<PastSession
					session={pastSessionInView}
					onDelete={onDelete}
					onGoBack={goBack}
				/>
			) : (
				<>
					<h1>Past Sessions</h1>
					<SessionList
						sessions={sessions}
						onSelect={setPastSessionInView}
						onDelete={onDelete}
					/>
				</>
			)}
		</div>
	);
}

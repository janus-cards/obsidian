import { useCallback, useState } from "react";

import sendSession from "@/api/send-session";
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

	const onSend = useCallback((session: ObsidianSession) => {
		sendSession(session).catch((error) => {
			console.error(error);
		});
	}, []);

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
						onSend={onSend}
					/>
				</>
			)}
		</div>
	);
}

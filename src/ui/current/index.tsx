import { useMemo } from "react";

import { useCurrentSession } from "@/state/current-session";
import { getSessionManager } from "@/state/session-manager";

import FileTreeEditor from "../file-tree-editor";

export default function CurrentSession() {
	const { session } = useCurrentSession();

	const paths = Object.keys(session?.contents.startSnapshots || {});

	const onDelete = (path: string) => {
		const manager = getSessionManager();
		manager.current().remove(path);
	};

	if (!session) return <h1>No session in progress</h1>;

	return (
		<div>
			<h1>Current Session</h1>
			<FileTreeEditor paths={paths} onDelete={onDelete} />
		</div>
	);
}

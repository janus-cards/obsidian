import { useMemo } from "react";

import { useCurrentSession } from "@/state/current-session";
import { getSessionManager } from "@/state/session-manager";

import { Button } from "../components/ui/button";
import FileTreeEditor from "../file-tree-editor";

export default function CurrentSession() {
	const { session } = useCurrentSession();

	const paths = Object.keys(session?.contents.startSnapshots || {});

	const onDelete = (path: string) => {
		const manager = getSessionManager();
		manager.current().remove(path);
	};

	const onSave = () => {
		const manager = getSessionManager();
		manager.current().finish();
	};

	const onReset = () => {
		const manager = getSessionManager();
		manager.current().reset();
	};

	if (!session) return <h1>No session in progress</h1>;

	return (
		<div>
			<h1>Current Session</h1>
			<div className="flex flex-row gap-2">
				<Button onClick={onSave}>Save</Button>
				<Button onClick={onReset}>Reset</Button>
			</div>
			<FileTreeEditor paths={paths} onDelete={onDelete} />
		</div>
	);
}

import { useCurrentSession } from "@/state/current-session";
import { getSessionManager } from "@/state/session-manager";

import FileTreeEditor from "../components/file-tree-editor";
import { RenameHeader } from "../components/rename-header";
import { Button } from "../components/ui/button";

export default function CurrentSession() {
	const { session } = useCurrentSession();

	const paths = Object.keys(session?.contents.startSnapshots || {});

	const onDelete = (path: string) => {
		const manager = getSessionManager();
		manager.current().remove(path);
	};

	const onSave = () => {
		const manager = getSessionManager();
		const session = manager.current().finish();
		manager.past().add(session);
	};

	const onSetName = (name: string) => {
		const manager = getSessionManager();
		manager.current().setName(name);
		console.log("setName", name);
	};

	const onReset = () => {
		const manager = getSessionManager();
		manager.current().reset();
	};

	if (!session) return <h1>No session in progress</h1>;

	return (
		<div>
			<RenameHeader value={session.info.name} onSetName={onSetName} />
			<div className="flex flex-row gap-2">
				<Button onClick={onSave}>Save</Button>
				<Button onClick={onReset}>Reset</Button>
			</div>
			<FileTreeEditor paths={paths} onDelete={onDelete} />
		</div>
	);
}

import { useCallback } from "react";

import FileTreeEditor from "@/ui/components/file-tree-editor";
import { Button } from "@/ui/components/ui/button";

export interface PastSessionProps {
	session: ObsidianSession;
	onDelete: (session: ObsidianSession) => void;
	onGoBack: () => void;
}

// TODO: Renamable Name
export default function PastSession({
	session,
	onDelete,
	onGoBack,
}: PastSessionProps) {
	const paths = Object.keys(session.contents.startSnapshots || {});

	const deleteAndGoBack = useCallback(() => {
		onDelete(session);
		onGoBack();
	}, [onDelete, onGoBack, session]);

	return (
		<div>
			<div className="flex flex-row gap-2">
				<h1>{session.info.name}</h1>
				<Button onClick={deleteAndGoBack}>Delete</Button>
				<Button onClick={onGoBack}>Back</Button>
			</div>
			<FileTreeEditor paths={paths} />
		</div>
	);
}

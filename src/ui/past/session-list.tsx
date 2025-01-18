import { Trash2Icon } from "lucide-react";
import * as React from "react";

import { Button } from "../components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";

export interface SessionListProps {
	sessions: ObsidianSession[];
	onSelect: (session: ObsidianSession) => void;
	onDelete?: (session: ObsidianSession) => void;
}

export default function SessionList({
	sessions,
	onSelect,
	onDelete,
}: SessionListProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{onDelete && <TableHead></TableHead>}
					<TableHead>Name</TableHead>
					<TableHead>Files</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{sessions.map((session) => (
					<TableRow
						key={session.id}
						className="cursor-pointer"
						onClick={() => onSelect(session)}
					>
						{onDelete && (
							<TableCell>
								<Button onClick={() => onDelete?.(session)}>
									<Trash2Icon />
								</Button>
							</TableCell>
						)}
						<TableCell>{session.info.name}</TableCell>
						<TableCell>
							{
								Object.keys(session.contents.startSnapshots)
									.length
							}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

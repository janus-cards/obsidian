import { SendIcon, Trash2Icon } from "lucide-react";
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
	onSend: (session: ObsidianSession) => void;
	onDelete: (session: ObsidianSession) => void;
}

export default function SessionList({
	sessions,
	onSelect,
	onSend,
	onDelete,
}: SessionListProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Files</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{sessions.map((session) => (
					<TableRow
						key={session.id}
						className="cursor-pointer"
						onClick={() => onSelect(session)}
					>
						<TableCell>{session.info.name}</TableCell>
						<TableCell>
							{
								Object.keys(session.contents.startSnapshots)
									.length
							}
						</TableCell>
						<TableCell>
							<Button
								onClick={(e) => {
									e.stopPropagation();
									onDelete(session);
								}}
							>
								<Trash2Icon />
							</Button>
							<Button
								onClick={(e) => {
									e.stopPropagation();
									onSend(session);
								}}
							>
								<SendIcon />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

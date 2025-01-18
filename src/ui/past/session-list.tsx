import * as React from "react";

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
}

export default function SessionList({ sessions, onSelect }: SessionListProps) {
	const formatDate = (timestamp: number) => {
		return new Date(timestamp).toLocaleString();
	};

	const formatDuration = (start: number, end?: number) => {
		if (!end) return "In Progress";
		const duration = end - start;
		const minutes = Math.floor(duration / 1000 / 60);
		return `${minutes} minutes`;
	};

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Start Time</TableHead>
					<TableHead>Duration</TableHead>
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
						<TableCell>{session.info.name}</TableCell>
						<TableCell>
							{formatDate(session.info.startTimestamp)}
						</TableCell>
						<TableCell>
							{formatDuration(
								session.info.startTimestamp,
								session.info.endTimestamp,
							)}
						</TableCell>
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

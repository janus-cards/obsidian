import { Trash2 } from "lucide-react";
import * as React from "react";
import { useEffect } from "react";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";

export interface FileTreeEditorProps {
	paths: string[];
	onDelete?: (path: string) => void;
}

export default function FileTreeEditor({
	paths,
	onDelete,
}: FileTreeEditorProps) {
	useEffect(() => {
		console.log("paths", paths);
	}, [paths]);
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Path</TableHead>
					{onDelete && (
						<TableHead className="w-[50px]">Actions</TableHead>
					)}
				</TableRow>
			</TableHeader>
			<TableBody>
				{paths.map((path) => (
					<TableRow key={path}>
						<TableCell>{path}</TableCell>
						{onDelete && (
							<TableCell>
								<button
									onClick={() => onDelete(path)}
									className="p-2 hover:bg-muted rounded-full"
									aria-label="Delete file"
								>
									<Trash2 className="h-4 w-4" />
								</button>
							</TableCell>
						)}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

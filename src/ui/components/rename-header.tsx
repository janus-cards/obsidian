import { Pencil } from "lucide-react";
import * as React from "react";
import { useState } from "react";

import { cn } from "src/include/shadcn";

import { Button } from "./ui/button";

export interface RenameHeaderProps {
	value: string;
	onSetName: (value: string) => void;
	className?: string;
}

export function RenameHeader({
	value,
	onSetName,
	className,
}: RenameHeaderProps) {
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState(value);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onSetName(inputValue);
			setIsEditing(false);
		} else if (e.key === "Escape") {
			setInputValue(value);
			setIsEditing(false);
		}
	};

	const handleBlur = () => {
		setInputValue(value);
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
				onBlur={handleBlur}
				className={cn(
					"bg-background text-xl font-semibold focus:outline-none focus:ring-1 focus:ring-ring rounded px-2 py-1",
					className,
				)}
				autoFocus
			/>
		);
	}

	return (
		<h1
			className={cn(
				"text-xl font-semibold flex items-center gap-2",
				className,
			)}
		>
			{value}
			<Button
				onClick={() => setIsEditing(true)}
				className="bg-muted rounded-full p-1 "
				aria-label="Edit title"
			>
				<Pencil className="h-4 w-4" />
			</Button>
		</h1>
	);
}

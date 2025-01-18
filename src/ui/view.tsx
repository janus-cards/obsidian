import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import CurrentSession from "./current";

export default function JanusView() {
	return (
		<div className="bg-background flex flex-col">
			<Tabs defaultValue="current" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="current">Current</TabsTrigger>
					<TabsTrigger value="history">History</TabsTrigger>
				</TabsList>
				<TabsContent value="current">
					<CurrentSession />
				</TabsContent>
				<TabsContent value="history">
					Change your password here.
				</TabsContent>
			</Tabs>
		</div>
	);
}

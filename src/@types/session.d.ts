declare global {
	export type FileSnapshots = Record<string, string>;

	export type ObsidianSession = {
		version: 1;
		id: number;
		info: {
			name: string;
			startTimestamp: number;
			endTimestamp?: number;
			vaultFolder: string;
		};
		contents: {
			startSnapshots: FileSnapshots;
			endSnapshots: FileSnapshots;
		};
	};
}
export {};

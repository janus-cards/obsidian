export interface Settings {
	private_paths: string[];
	private_tags: string[];
}

export const DEFAULT_SETTINGS: Settings = {
	private_paths: [],
	private_tags: [],
};

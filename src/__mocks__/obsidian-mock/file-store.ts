import fs from "fs";

class FileState {
	data: string | null;

	constructor(data: string | null) {
		this.data = data;
	}

	getData(): string {
		if (!this.exists()) {
			throw new Error(`Cannot read data from a non-existent file`);
		}
		return this.data!;
	}
	exists(): boolean {
		return this.data !== null;
	}
}

type ExistRule = "must-exist" | "must-not-exist" | "ignore";
/*
A simple in-memory file store that can be used to simulate a vault.
All manipulations to the file are transactional.
*/
export class InMemoryFileStore {
	files: Map<string, FileState> = new Map();
	vault_path: string;

	constructor(vault_path: string) {
		this.vault_path = vault_path;
	}

	async createFile(path: string, data: string): Promise<void> {
		this.setFile(path, data, "must-not-exist");
	}

	async modifyFile(path: string, data: string): Promise<void> {
		this.setFile(path, data, "must-exist");
	}

	async deleteFile(path: string): Promise<void> {
		this.setFile(path, null, "must-exist");
	}

	async renameFile(oldPath: string, newPath: string): Promise<void> {
		// Get the old file_data
		const data = await this.readFile(oldPath);
		// Set the new file_data
		await this.setFile(newPath, data, "must-not-exist");
		// Delete the old file
		await this.deleteFile(oldPath);
	}

	async readFile(path: string): Promise<string> {
		this.ensureFileLoaded(path);
		const state = this.files.get(path);
		if (!state || !state.exists()) {
			throw new Error(`File ${path} does not exist`);
		}
		return state.getData();
	}

	private async setFile(
		path: string,
		data: string | null, // null means the file is deleted
		existsRule: ExistRule
	) {
		await this.ensureFileLoaded(path);
		const oldState = this.files.get(path)!;

		switch (existsRule) {
			case "must-exist":
				if (!oldState.exists()) {
					throw new Error(`File ${path} does not exist`);
				}
				break;
			case "must-not-exist":
				if (oldState.exists()) {
					throw new Error(`File ${path} already exists`);
				}
				break;
			case "ignore":
				break;
		}

		this.files.set(path, new FileState(data));
	}

	private async ensureFileLoaded(path: string) {
		if (!this.files.has(path)) {
			// Try to load the file from disk
			await this.loadFileFromDisk(path);
		}
	}

	private async loadFileFromDisk(path: string) {
		const full_path = path.startsWith(this.vault_path)
			? path
			: this.vault_path + "/" + path;
		// Check if file exists
		const data = fs.existsSync(full_path)
			? await fs.promises.readFile(full_path, "utf8")
			: null;
		this.files.set(path, new FileState(data));
	}
}

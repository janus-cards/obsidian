import { getAllTags, TAbstractFile, TFile } from "obsidian";

import JanusIntegration from "./main";

export default class PrivacyFilterer {
	plugin: JanusIntegration;
	constructor(plugin: JanusIntegration) {
		this.plugin = plugin;
	}

	shouldSend(file: TAbstractFile): boolean {
		if (file instanceof TFile) {
			return !(
				this.privateTagInFile(file) ||
				this.privatePathPrefixesFile(file)
			);
		}
		return true;
	}

	private privateTagInFile(file: TFile): boolean {
		const privateTags = this.plugin.settings.private_tags;
		const fileCache = this.plugin.app.metadataCache.getFileCache(file);
		const tagsInFile = fileCache ? getAllTags(fileCache) : [];
		if (!tagsInFile || !privateTags) return false;
		return privateTags.some((tag) => tagsInFile.includes(tag));
	}

	private privatePathPrefixesFile(file: TFile): boolean {
		const privatePathPrefixes = this.plugin.settings.private_paths;
		const filePath = file.path;
		if (!privatePathPrefixes) return false;
		return privatePathPrefixes.some((prefix) =>
			filePath.startsWith(prefix),
		);
	}
}

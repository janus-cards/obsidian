// ***************************************************************************************
// *    Title: suggests/tag-suggest.ts
// *    Author: Faru https://github.com/farux
// *    Date: 2022
// *    Code version: Latest commit 7e72c9d on 6 Feb 2022
// *    Availability: https://github.com/farux/obsidian-auto-note-mover
// *    Copyright (c) 2022 faru
// *
// ***************************************************************************************
import {
	App,
	Plugin,
	TFile,
	getAllTags,
	CachedMetadata,
	PluginManifest,
} from "obsidian";

import { TextInputSuggest } from "./suggest";

export class GetAllTagsInTheVault extends Plugin {
	fileArray: TFile[];
	fileCache: (CachedMetadata | null)[];
	tagArray: (string[] | null)[];
	tagArrayJoin: string;
	tagArraySplit: string[];
	tagArrayFilter: string[];
	tagList: string[];

	constructor(app: App, manifest: PluginManifest) {
		super(app, manifest);
		this.fileArray = this.app.vault.getMarkdownFiles();
		this.fileCache = this.fileArray.map((value) =>
			this.app.metadataCache.getFileCache(value),
		);
		this.tagArray = this.fileCache.map((value) =>
			value ? getAllTags(value) : null,
		);
		this.tagArrayJoin = this.tagArray
			.filter((tags) => tags !== null)
			.join();
		this.tagArraySplit = this.tagArrayJoin.split(",");
		this.tagArrayFilter = this.tagArraySplit.filter(Boolean);
		this.tagList = [...new Set(this.tagArrayFilter)];
	}

	pull(): string[] {
		return this.tagList;
	}
}

export class TagSuggest extends TextInputSuggest<string> {
	manifest: PluginManifest;
	tagList: GetAllTagsInTheVault;
	tagMatch: string[];
	lowerCaseInputStr: string;

	getSuggestions(inputStr: string): string[] {
		this.tagList = new GetAllTagsInTheVault(this.app, this.manifest);
		this.tagMatch = [];
		this.lowerCaseInputStr = inputStr.toLowerCase();

		this.tagList.pull().forEach((Tag: string) => {
			if (Tag.toLowerCase().contains(this.lowerCaseInputStr)) {
				this.tagMatch.push(Tag);
			}
		});

		return this.tagMatch;
	}

	renderSuggestion(Tag: string, el: HTMLElement): void {
		el.setText(Tag);
	}

	selectSuggestion(Tag: string): void {
		this.inputEl.value = Tag;
		this.inputEl.trigger("input");
		this.close();
	}
}

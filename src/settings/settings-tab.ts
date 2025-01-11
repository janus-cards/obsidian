import { App, PluginSettingTab, Setting } from "obsidian";

import ExamplePlugin from "../main";

import { FolderSuggest } from "./suggest/file-suggest";
import { TagSuggest } from "./suggest/tag-suggest";

export class SettingTab extends PluginSettingTab {
	plugin: ExamplePlugin;

	constructor(app: App, plugin: ExamplePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	private createItemsDisplay(
		containerEl: HTMLElement,
		items: string[],
		onDelete: (index: number) => Promise<void>,
	): void {
		const itemsContainer = containerEl.createDiv("items-container");
		itemsContainer.style.marginTop = "1em";
		itemsContainer.style.display = "flex";
		itemsContainer.style.flexWrap = "wrap";
		itemsContainer.style.gap = "0.5em";

		items.forEach((item: string, index: number) => {
			const itemContainer = itemsContainer.createDiv("item-container");
			itemContainer.style.display = "flex";
			itemContainer.style.alignItems = "center";
			itemContainer.style.padding = "0.3em 0.5em";
			itemContainer.style.backgroundColor = "var(--background-secondary)";
			itemContainer.style.borderRadius = "4px";

			const itemText = itemContainer.createSpan();
			itemText.setText(item);
			itemText.style.marginRight = "0.5em";

			const deleteButton = itemContainer.createEl("button");
			deleteButton.setText("×");
			deleteButton.style.border = "none";
			deleteButton.style.background = "none";
			deleteButton.style.cursor = "pointer";
			deleteButton.style.padding = "0 0.2em";
			deleteButton.addEventListener("click", () => onDelete(index));
		});
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();
		const settings = this.plugin.settings;
		containerEl.createEl("h2", { text: "Privacy Settings" });

		// Private Paths Section
		let suggestionPath = "";
		new Setting(containerEl)
			.setName("Private paths")
			.setDesc("File paths that you do not want to send to Janus")
			.addSearch((cb) => {
				new FolderSuggest(this.app, cb.inputEl);
				cb.setPlaceholder("Folder")
					.setValue("")
					.onChange(async (newFolder) => {
						suggestionPath = newFolder.trim();
					});
			})
			.addButton((cb) => {
				cb.setButtonText("Add").onClick(async () => {
					settings.private_paths.push(suggestionPath);
					await this.plugin.saveSettings();
					this.display();
				});
			});

		this.createItemsDisplay(
			containerEl,
			settings.private_paths,
			async (index) => {
				settings.private_paths.splice(index, 1);
				await this.plugin.saveSettings();
				this.display();
			},
		);

		// Private Tags Section
		let suggestionTag = "";
		new Setting(containerEl)
			.setName("Private tags")
			.setDesc("Tags that you do not want to send to Janus")
			.addSearch((cb) => {
				new TagSuggest(this.app, cb.inputEl);
				cb.setPlaceholder("Tag")
					.setValue("")
					.onChange(async (newTag) => {
						suggestionTag = newTag.trim();
					});
			})
			.addButton((cb) => {
				cb.setButtonText("Add").onClick(async () => {
					settings.private_tags.push(suggestionTag);
					await this.plugin.saveSettings();
					this.display();
				});
			});

		this.createItemsDisplay(
			containerEl,
			settings.private_tags,
			async (index) => {
				settings.private_tags.splice(index, 1);
				await this.plugin.saveSettings();
				this.display();
			},
		);
	}
}

import { Plugin } from "obsidian";

import { DEFAULT_SETTINGS, Settings } from "./settings/settings";
import { SettingTab } from "./settings/settings-tab";

export default class JanusIntegration extends Plugin {
	settings: Settings;
	async onload(): Promise<void> {
		await this.loadSettings();

		this.addSettingTab(new SettingTab(this.app, this));

		/*
		const request = new ConnectRequest({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			vault_path: this.app.vault.adapter.basePath,
			version: "0.0",
		});
		 const privacyFilterer = new PrivacyFilterer(this);
		 const filter = privacyFilterer.shouldSend.bind(privacyFilterer);
		*/
	}

	async loadSettings(): Promise<void> {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData(),
		);
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
	}
}

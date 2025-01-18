import { Plugin } from "obsidian";

import PrivacyFilterer from "./privacy-filterer";
import SessionAdder from "./session/session-adder";
import SessionManager from "./session/session-manager";
import { DEFAULT_SETTINGS, Settings } from "./settings/settings";
import { SettingTab } from "./settings/settings-tab";
import { useCurrentSession } from "./state/current-session";

export default class JanusIntegration extends Plugin {
	settings: Settings;
	sessionManager: SessionManager;
	sessionAdder: SessionAdder;

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
		*/
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const vaultPath = this.app.vault.adapter.basePath;
		this.sessionManager = new SessionManager(vaultPath);
		this.sessionManager.on(
			"updateCurrentSession",
			(session: ObsidianSession | null) => {
				console.log("updateCurrentSession", session);
				useCurrentSession.getState().onUpdate(session);
			},
		);
		const filterer = new PrivacyFilterer(this);
		const filter = filterer.filter.bind(filterer);
		this.sessionAdder = new SessionAdder(this, this.sessionManager, filter);
		// TODO: Wait after loading (i.e. after 2 seconds)
		this.sessionAdder.startWatching();
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

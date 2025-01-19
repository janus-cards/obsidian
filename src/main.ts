import fs from "fs";
import path from "path";

import { Plugin, WorkspaceLeaf } from "obsidian";

import PrivacyFilterer from "./privacy-filterer";
import SessionAdder from "./session/session-adder";
import SessionManager from "./session/session-manager";
import { DEFAULT_SETTINGS, Settings } from "./settings/settings";
import { SettingTab } from "./settings/settings-tab";
import { useCurrentSession } from "./state/current-session";
import { usePastSession } from "./state/past-session";
import { setSessionManager } from "./state/session-manager";
import SessionItemView, { VIEW_TYPE_SESSION_VIEWS } from "./ui/view-container";

export default class JanusIntegration extends Plugin {
	settings: Settings;
	sessionManager: SessionManager;
	sessionAdder: SessionAdder;

	async onload(): Promise<void> {
		this.registerView(
			VIEW_TYPE_SESSION_VIEWS,
			(leaf) => new SessionItemView(leaf),
		);

		// Wait 1 second
		// For some reason, activating the view immediately doesn't work
		setTimeout(() => this.activateView(), 1000);

		await this.loadSettings();

		this.addSettingTab(new SettingTab(this.app, this));

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const vaultPath = this.app.vault.adapter.basePath;
		this.sessionManager = new SessionManager(vaultPath);
		setSessionManager(this.sessionManager);

		const configDir = path.join(vaultPath, ".janus");
		this.sessionManager.on(
			"updateCurrentSession",
			(session: ObsidianSession | null) => {
				console.log("updateCurrentSession", session);
				useCurrentSession.getState().onUpdate(session);
			},
		);
		this.sessionManager.on(
			"updatePastSessions",
			(sessions: ObsidianSession[]) => {
				console.log("updatePastSessions", sessions);
				usePastSession.getState().onUpdate(sessions);
			},
		);
		this.sessionManager.start(configDir);

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

	private async activateView() {
		const { workspace } = this.app;

		let leaf: WorkspaceLeaf | null = null;
		const leaves = workspace.getLeavesOfType(VIEW_TYPE_SESSION_VIEWS);
		console.log("leaves", leaves);
		if (leaves.length > 0) {
			// A leaf with our view already exists, use that
			leaf = leaves[0];
			console.log("Found existing leaf");
		} else {
			console.log("Creating new leaf");
			// Our view could not be found in the workspace, create a new leaf
			// in the right sidebar for it
			leaf = workspace.getLeftLeaf(false);
			await leaf?.setViewState({
				type: VIEW_TYPE_SESSION_VIEWS,
				active: true,
			});
		}

		// "Reveal" the leaf in case it is in a collapsed sidebar
		workspace.revealLeaf(leaf!);
	}
}

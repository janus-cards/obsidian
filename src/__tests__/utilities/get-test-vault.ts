import { App as ObsidianApp, Plugin } from "obsidian";

import { App } from "@/__mocks__/obsidian-mock/app";

export const getTestVaultFolder = (): string => "src/__tests__/__test_vault__";

export default function getTestApp(): ObsidianApp {
	const testFolder = getTestVaultFolder();
	return new App(testFolder) as unknown as ObsidianApp;
}

export function getTestPlugin(app: ObsidianApp): Plugin {
	// This should be a mock
	const mockedApp = app as unknown as App;
	return mockedApp.createPlugin() as unknown as Plugin;
}

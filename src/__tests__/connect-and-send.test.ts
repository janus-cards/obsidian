import {
	afterEach,
	beforeEach,
	describe,
	expect,
	jest,
	test,
} from "@jest/globals";

jest.mock("obsidian");

import { randomString } from "../include/random";
import { Plugin } from "../__mocks__/obsidian-mock/plugin";

import getTestApp from "./utilities/get-test-vault";

describe("TODO", () => {
	let plugin: Plugin;

	const createRandomFile = () => {
		const randomFileName = `test-${randomString(10)}.md`;
		plugin.app.vault.create(randomFileName, "test");
		return randomFileName;
	};

	beforeEach(() => {
		// Setup the plugin
		const app = getTestApp();
		plugin = new Plugin(app);

		// Setup the feed manager
		//const vaultPath = getTestVaultFolder();
	});

	afterEach(() => {});
	test("TODO", () => {
		expect(true).toBe(true);
	});
});

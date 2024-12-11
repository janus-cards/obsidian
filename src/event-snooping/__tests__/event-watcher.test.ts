import {
	afterEach,
	beforeEach,
	describe,
	expect,
	jest,
	test,
} from "@jest/globals";

jest.mock("obsidian");

import getTestApp from "../../__tests__/utilities/get-test-vault";
import { App } from "obsidian-mock";
import { EventSpyer } from "@/event-snooping/event-spyer";
import { Plugin } from "@/__mocks__/obsidian-mock/plugin";
import { TFile } from "@/__mocks__/obsidian-mock/files";

describe("when we create an event watcher", () => {
	let app: App;
	let plugin: Plugin;
	let watcher: EventSpyer;

	beforeEach(async () => {
		app = getTestApp();
		plugin = new Plugin(app);
		watcher = new EventSpyer(plugin);
		watcher.startWatching();
	});

	test("should see all the events on vault open", async () => {
		await app.load();
		expect(watcher.onCreate.mock.calls.length).toEqual(589);
	});

	describe("and if there are changes to files", () => {
		beforeEach(async () => {
			await app.load();
			watcher.onCreate.mockClear();
		});

		test("should see renames", async () => {
			const oldPath = "Algorithms MOC/Bit Manipulation Tricks.md";
			const newPath = "Algorithm MOC/Bit Manipulation Tips & Tricks.md";
			await app.vault.rename(new TFile(oldPath), newPath);
			expect(watcher.onRename.mock.calls.length).toEqual(1);
			expect(watcher.onModify.mock.calls.length).toEqual(0);
			expect(watcher.onDelete.mock.calls.length).toEqual(0);
			expect(watcher.onCreate.mock.calls.length).toEqual(0);
			expect(await app.vault.exists(oldPath)).toEqual(false);
			expect(await app.vault.exists(newPath)).toEqual(true);
		});

		test("should see deletions", async () => {
			const path = "Algorithms MOC/Bit Manipulation Tricks.md";
			await app.vault.delete(new TFile(path));
			expect(watcher.onDelete.mock.calls.length).toEqual(1);
			expect(watcher.onModify.mock.calls.length).toEqual(0);
			expect(watcher.onRename.mock.calls.length).toEqual(0);
			expect(watcher.onCreate.mock.calls.length).toEqual(0);
			expect(await app.vault.exists(path)).toEqual(false);
		});

		test("should see modifications", async () => {
			const path = new TFile("Algorithms MOC/Bit Manipulation Tricks.md");
			await app.vault.modify(path, "Updated content");
			expect(watcher.onModify.mock.calls.length).toEqual(1);
			expect(watcher.onDelete.mock.calls.length).toEqual(0);
			expect(watcher.onRename.mock.calls.length).toEqual(0);
			expect(watcher.onCreate.mock.calls.length).toEqual(0);
			expect(await app.vault.exists(path.path)).toEqual(true);
			expect(await app.vault.read(path)).toEqual("Updated content");
		});

		test("should see creations", async () => {
			const path = "Algorithms MOC/Luhn's Algorithm.md";
			await app.vault.create(path, "test");
			expect(watcher.onCreate.mock.calls.length).toEqual(1);
			expect(watcher.onModify.mock.calls.length).toEqual(0);
			expect(watcher.onDelete.mock.calls.length).toEqual(0);
			expect(watcher.onRename.mock.calls.length).toEqual(0);
			expect(await app.vault.exists(path)).toEqual(true);
		});

		test("should see error if creating an existing file", async () => {
			const path = "Algorithms MOC/Bit Manipulation Tricks.md";
			expect(app.vault.create(path, "test")).rejects.toThrow();
		});
	});
});

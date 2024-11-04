import { App } from "@/__mocks__/obsidian-mock/app";

export const getTestVaultFolder = () => "src/__tests__/__test_vault__";

export default function getTestApp() {
	const testFolder = getTestVaultFolder();
	return new App(testFolder);
}

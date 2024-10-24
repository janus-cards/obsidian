import { describe, expect, test } from "@jest/globals";

describe("Simple test suite", () => {
	test("adds 1 + 2 to equal 3", () => {
		expect(1 + 2).toBe(3);
	});

	test("true is truthy", () => {
		expect(true).toBeTruthy();
	});

	test("false is falsy", () => {
		expect(false).toBeFalsy();
	});
});

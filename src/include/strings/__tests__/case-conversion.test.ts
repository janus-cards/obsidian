import { describe, it, expect } from "@jest/globals";

import { UnstyledSymbol, CamelCase, KebabCase } from "../case-conversion";

describe("UnstyledSymbol", () => {
	it("should store terms array", () => {
		const terms = ["hello", "world"];
		const symbol = new UnstyledSymbol(terms);
		expect(symbol.terms).toEqual(terms);
	});
});

describe("CamelCase", () => {
	describe("style", () => {
		it("should convert terms to camelCase", () => {
			const symbol = new UnstyledSymbol(["hello", "world"]);
			expect(CamelCase.style(symbol)).toBe("helloWorld");
		});

		it("should handle single term", () => {
			const symbol = new UnstyledSymbol(["test"]);
			expect(CamelCase.style(symbol)).toBe("test");
		});

		it("should handle empty terms array", () => {
			const symbol = new UnstyledSymbol([]);
			expect(CamelCase.style(symbol)).toBe("");
		});
	});

	describe("unstyle", () => {
		it("should split string on underscores", () => {
			const result = CamelCase.unstyle("hello_world");
			expect(result.terms).toEqual(["hello", "world"]);
		});

		it("should split string on hyphens", () => {
			const result = CamelCase.unstyle("hello-world");
			expect(result.terms).toEqual(["hello", "world"]);
		});

		it("should handle single term", () => {
			const result = CamelCase.unstyle("test");
			expect(result.terms).toEqual(["test"]);
		});

		it("should handle empty string", () => {
			const result = CamelCase.unstyle("");
			expect(result.terms).toEqual([""]);
		});
	});
});

describe("KebabCase", () => {
	describe("style", () => {
		it("should join terms with hyphens", () => {
			const symbol = new UnstyledSymbol(["hello", "world"]);
			expect(KebabCase.style(symbol)).toBe("hello-world");
		});

		it("should handle single term", () => {
			const symbol = new UnstyledSymbol(["test"]);
			expect(KebabCase.style(symbol)).toBe("test");
		});

		it("should handle empty terms array", () => {
			const symbol = new UnstyledSymbol([]);
			expect(KebabCase.style(symbol)).toBe("");
		});
	});

	describe("unstyle", () => {
		it("should split string on hyphens", () => {
			const result = KebabCase.unstyle("hello-world");
			expect(result.terms).toEqual(["hello", "world"]);
		});

		it("should handle single term", () => {
			const result = KebabCase.unstyle("test");
			expect(result.terms).toEqual(["test"]);
		});

		it("should handle empty string", () => {
			const result = KebabCase.unstyle("");
			expect(result.terms).toEqual([""]);
		});

		it("should handle multiple hyphens", () => {
			const result = KebabCase.unstyle("hello-beautiful-world");
			expect(result.terms).toEqual(["hello", "beautiful", "world"]);
		});
	});

	describe("Kebab to Camel", () => {
		it("should convert kebab to camel", () => {
			const unstyled = KebabCase.unstyle("file-open");
			const camel = CamelCase.style(unstyled);
			expect(camel).toBe("fileOpen");
		});
	});
});

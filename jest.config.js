/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	roots: ["<rootDir>/src"], // Connects node_modules to src/__mocks__
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				useESM: true,
				tsconfig: "tsconfig.json",
				diagnostics: false,
			},
		],
	},
	testMatch: ["**/__tests__/**/*.test.(ts|js)"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	extensionsToTreatAsEsm: [".ts"],
	automock: false,
};

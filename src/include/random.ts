export function randomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomPort() {
	return randomInt(1024, 65535);
}

export function randomChar(startChar = "a", endChar = "z") {
	return String.fromCharCode(
		randomInt(startChar.charCodeAt(0), endChar.charCodeAt(0))
	);
}

export function randomString(length: number, startChar = "a", endChar = "z") {
	return Array.from({ length }, () => randomChar(startChar, endChar)).join(
		""
	);
}

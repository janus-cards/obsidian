import { request, RequestUrlParam } from "obsidian";

export default async function sendSession(session: ObsidianSession) {
	console.log("sending session", session);
	const requestParams: RequestUrlParam = {
		method: "POST",
		url: "http://localhost:8118/janus/obsidian/add-session",
		body: JSON.stringify(session),
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await request(requestParams);
	console.log(response);
}

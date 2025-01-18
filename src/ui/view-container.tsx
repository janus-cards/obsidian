import { WorkspaceLeaf, ItemView } from "obsidian";
import React, { StrictMode } from "react";
import { Root, createRoot } from "react-dom/client";

import JanusView from "./view";

export const VIEW_TYPE_SESSION_VIEWS = "session-views";
export default class SessionItemView extends ItemView {
	root: Root | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_SESSION_VIEWS;
	}

	getDisplayText() {
		return "Janus";
	}

	async onOpen() {
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<JanusView />
			</StrictMode>,
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}

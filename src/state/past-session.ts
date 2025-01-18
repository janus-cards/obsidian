import { create } from "zustand";

export interface PastSessionState {
	sessions: ObsidianSession[];
	onUpdate: (session: ObsidianSession[]) => void;
}
export const usePastSession = create<PastSessionState>()((set) => ({
	sessions: [],
	onUpdate: (sessions: ObsidianSession[]) => set({ sessions }),
}));

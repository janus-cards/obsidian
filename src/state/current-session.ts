import { create } from "zustand";

export interface CurrentSessionState {
	session: ObsidianSession | null;
	onUpdate: (session: ObsidianSession | null) => void;
}
export const useCurrentSession = create<CurrentSessionState>()((set) => ({
	session: null,
	onUpdate: (session: ObsidianSession) => set({ session }),
}));

import { create } from 'zustand';

interface AppState {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  isDeveloperMode: boolean;
  enableDeveloperMode: () => void;
}

export const useStore = create<AppState>((set) => ({
  isRecruiterMode: false,
  toggleRecruiterMode: () => set((state) => ({ isRecruiterMode: !state.isRecruiterMode })),
  isDeveloperMode: false,
  enableDeveloperMode: () => set({ isDeveloperMode: true }),
}));

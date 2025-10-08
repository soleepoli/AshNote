import { create } from "zustand";

interface EmotionState {
  emotion: string | null;
  setEmotion: (emotion: string) => void;
  clearEmotion: () => void;
}

export const useEmotionStore = create<EmotionState>((set) => ({
  emotion: null,
  setEmotion: (emotion) => set({ emotion }),
  clearEmotion: () => set({ emotion: null }),
}));
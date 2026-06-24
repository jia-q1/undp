import { create } from "zustand";

interface ScrollState {
  scrollProgress: number;
  activeChapter: number;
  setScrollProgress: (progress: number) => void;
  setActiveChapter: (chapter: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollProgress: 0,
  activeChapter: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setActiveChapter: (chapter) => set({ activeChapter: chapter }),
}));

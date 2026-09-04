import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDark: boolean;
}

interface ThemeActions {
  toggle: () => void;
}

type ThemeStore = ThemeState & ThemeActions;

const initialSate: ThemeState = {
  isDark: false,
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      ...initialSate,
      toggle: () => set((currentState) => ({ isDark: !currentState.isDark })),
    }),
    {
      name: 'theme',
    },
  ),
);

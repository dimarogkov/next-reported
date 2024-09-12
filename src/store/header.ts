import { create } from 'zustand';
import { IHeaderStore } from '../types/interfaces/HeaderStore';

export const useHeader = create<IHeaderStore>((set) => ({
    isSearchOpen: false,
    isMenuOpen: false,
    setIsSearchOpen: (value) => set({ isSearchOpen: value }),
    setIsMenuOpen: (value) => set({ isMenuOpen: value }),
    toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    closeMenu: () => set({ isSearchOpen: false, isMenuOpen: false }),
}));

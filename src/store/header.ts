import { create } from 'zustand';
import { IHeaderStore } from '../types/interfaces/HeaderStore';

export const useHeader = create<IHeaderStore>((set) => ({
    isSubscribeOpen: false,
    isSearchOpen: false,
    isMenuOpen: false,
    setIsSubscribeOpen: (value) => set({ isSubscribeOpen: value }),
    setIsSearchOpen: (value) => set({ isSearchOpen: value }),
    setIsMenuOpen: (value) => set({ isMenuOpen: value }),
    toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    closeMenu: () => set({ isSubscribeOpen: false, isSearchOpen: false, isMenuOpen: false }),
}));

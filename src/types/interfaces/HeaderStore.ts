export interface IHeaderStore {
    isSubscribeOpen: boolean;
    isSearchOpen: boolean;
    isMenuOpen: boolean;
    setIsSubscribeOpen: (value: boolean) => void;
    setIsSearchOpen: (value: boolean) => void;
    setIsMenuOpen: (value: boolean) => void;
    toggleSearch: () => void;
    toggleMenu: () => void;
    closeMenu: () => void;
}

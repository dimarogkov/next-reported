export interface IHeaderStore {
    isSearchOpen: boolean;
    isMenuOpen: boolean;
    setIsSearchOpen: (value: boolean) => void;
    setIsMenuOpen: (value: boolean) => void;
    toggleSearch: () => void;
    toggleMenu: () => void;
    closeMenu: () => void;
}

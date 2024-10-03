import { create } from 'zustand';
import { IAuthorStore } from '../types/interfaces/AuthorStore';

export const useAuthor = create<IAuthorStore>((set) => ({
    currentPage: 1,
    itemsPerPage: 24,
    searchValue: '',
    setCurrentPage: (value) => set({ currentPage: value }),
    setSearchValue: (value) => set({ searchValue: value }),
}));

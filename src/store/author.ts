import { create } from 'zustand';
import { IAuthorStore } from '../types/interfaces/AuthorStore';

export const useAuthor = create<IAuthorStore>((set) => ({
    searchValue: '',
    setSearchValue: (value) => set({ searchValue: value }),
}));

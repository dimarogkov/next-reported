export interface IAuthorStore {
    currentPage: number;
    itemsPerPage: number;
    searchValue: string;
    setCurrentPage: (value: number) => void;
    setSearchValue: (value: string) => void;
}

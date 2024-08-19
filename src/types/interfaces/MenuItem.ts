export interface IMenu {
    deskMenu: IMenuItem[];
    burgerMenu: IMenuItem[];
}

export interface IMenuItem {
    id: number;
    href: string;
    name: string;
}

import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

export interface IMenu {
    deskMenu: IMenuItem[];
    burgerMenu: Omit<IMenuItem, 'icon'>[];
}

export interface IMenuItem {
    id: number;
    href: string;
    name: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
}

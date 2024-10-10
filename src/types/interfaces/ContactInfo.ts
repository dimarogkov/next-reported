import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';

export interface IContactInfoText {
    id: number;
    hrefPart: string;
    text: string;
    isLink: boolean;
}

export interface IContactInfo {
    id: number;
    title: string;
    textArr: IContactInfoText[];
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
}

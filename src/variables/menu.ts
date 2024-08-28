import { BriefcaseBusiness, Hospital, Landmark, Microscope, Trophy, Tv } from 'lucide-react';
import { IMenu } from '../types/interfaces/MenuItem';

export const menu: IMenu = {
    deskMenu: [
        {
            id: 0,
            href: '/sports',
            name: 'Sports',
            icon: Trophy,
        },
        {
            id: 1,
            href: '/politics',
            name: 'Politics',
            icon: Landmark,
        },
        {
            id: 2,
            href: '/entertainment',
            name: 'Entertainment',
            icon: Tv,
        },
        {
            id: 3,
            href: '/business',
            name: 'Business',
            icon: BriefcaseBusiness,
        },
        {
            id: 4,
            href: '/health',
            name: 'Health',
            icon: Hospital,
        },
        {
            id: 5,
            href: '/science',
            name: 'Science',
            icon: Microscope,
        },
    ],
    burgerMenu: [
        {
            id: 0,
            href: '/about-us',
            name: 'About us',
        },
        {
            id: 1,
            href: '/authors',
            name: 'Authors',
        },
        {
            id: 2,
            href: '/contact',
            name: 'Contact',
        },
    ],
};

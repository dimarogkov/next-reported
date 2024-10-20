import { BriefcaseBusiness, Hospital, Landmark, Microscope, Trophy, Tv } from 'lucide-react';
import { IMenu } from '../types/interfaces/MenuItem';
import { PATHS } from './paths';

export const MENU: IMenu = {
    deskMenu: [
        {
            id: 0,
            href: PATHS.SPORTS,
            name: 'Sports',
            icon: Trophy,
        },
        {
            id: 1,
            href: PATHS.POLITICS,
            name: 'Politics',
            icon: Landmark,
        },
        {
            id: 2,
            href: PATHS.ENTERTAINMENT,
            name: 'Entertainment',
            icon: Tv,
        },
        {
            id: 3,
            href: PATHS.BUSINESS,
            name: 'Business',
            icon: BriefcaseBusiness,
        },
        {
            id: 4,
            href: PATHS.HEALTH,
            name: 'Health',
            icon: Hospital,
        },
        {
            id: 5,
            href: PATHS.SCIENCE,
            name: 'Science',
            icon: Microscope,
        },
    ],
    burgerMenu: [
        {
            id: 0,
            href: PATHS.ABOUT_US,
            name: 'About us',
        },
        {
            id: 1,
            href: PATHS.AUTHORS,
            name: 'Authors',
        },
        {
            id: 2,
            href: PATHS.CONTACT,
            name: 'Contact',
        },
    ],
};

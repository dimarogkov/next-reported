'use client';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useHeader } from '@/src/store/header';

import {
    HeaderDrawer,
    HeaderLayer,
    HeaderMenu,
    HeaderNavigation,
    HeaderSearch,
    HeaderSubscribe,
} from '../elements/Header';

import { Logo } from '../elements';

type Props = {
    setIsBodyLock: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setIsBodyLock }) => {
    const { isMenuOpen, isSearchOpen, isSubscribeOpen, closeMenu } = useHeader((state) => state);
    const pathname = usePathname();

    useEffect(() => {
        setIsBodyLock(isMenuOpen || isSearchOpen || isSubscribeOpen);
    }, [isMenuOpen, isSearchOpen, isSubscribeOpen, setIsBodyLock]);

    useEffect(() => {
        closeMenu();
    }, [closeMenu, pathname]);

    return (
        <header className='sticky top-0 left-0 z-20 w-full h-16 lg:h-20'>
            <div className='relative z-10 w-full h-full border-b border-gray bg-white'>
                <div className='flex items-center justify-between w-full h-full max-w-screen-2xl px-4 sm:px-5 mx-auto'>
                    <Logo className='xl:min-w-60' />
                    <HeaderMenu pathname={pathname} />
                    <HeaderNavigation />
                </div>
            </div>

            <HeaderLayer />
            <HeaderDrawer pathname={pathname} />
            <HeaderSubscribe />
            <HeaderSearch />
        </header>
    );
};

export default Header;

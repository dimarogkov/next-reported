'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderDrawer, HeaderLayer, HeaderMenu, HeaderNavigation, HeaderSearch } from '../elements/Header';
import { Logo } from '../elements';

type Props = {
    setIsBodyLock: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ setIsBodyLock }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleSearch = () => setIsSearchOpen((prevState) => !prevState);
    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

    const closeMenu = () => {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        setIsBodyLock(isMenuOpen || isSearchOpen);
    }, [isMenuOpen, isSearchOpen, setIsBodyLock]);

    useEffect(() => {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header className='sticky top-0 left-0 z-20 w-full h-16 lg:h-20'>
            <div className='relative z-10 w-full h-full border-b border-gray bg-white'>
                <div className='flex items-center justify-between w-full h-full max-w-screen-2xl px-4 sm:px-5 mx-auto'>
                    <Logo className='xl:min-w-60' />
                    <HeaderMenu />
                    <HeaderNavigation toggleSearch={toggleSearch} toggleMenu={toggleMenu} />
                </div>
            </div>

            <HeaderLayer isVisible={isMenuOpen || isSearchOpen} hideLayer={closeMenu} />
            <HeaderDrawer pathname={pathname} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <HeaderSearch isSearchOpen={isSearchOpen} />
        </header>
    );
};

export default Header;

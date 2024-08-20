'use client';
import { useEffect, useState } from 'react';
import { HeaderDrawer, HeaderLayer, HeaderMenu, HeaderNavigation, HeaderSearch } from '../elements/Header';
import { Logo } from '../elements';

type Props = {
    className?: string;
};

const Header: React.FC<Props> = ({ className = '' }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => setIsSearchOpen((prevState) => !prevState);
    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

    const closeMenu = () => {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        isSearchOpen || isMenuOpen
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isSearchOpen]);

    return (
        <header className={`sticky top-0 left-0 z-20 w-full h-16 lg:h-20 ${className}`}>
            <div className='relative z-10 w-full h-full border-b border-gray bg-white'>
                <div className='flex items-center justify-between w-full h-full max-w-screen-2xl px-4 sm:px-5 mx-auto'>
                    <Logo className='xl:min-w-60' />
                    <HeaderMenu />
                    <HeaderNavigation toggleSearch={toggleSearch} toggleMenu={toggleMenu} />
                </div>
            </div>

            <HeaderLayer isVisible={isMenuOpen || isSearchOpen} hideLayer={closeMenu} />
            <HeaderDrawer isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <HeaderSearch isSearchOpen={isSearchOpen} />
        </header>
    );
};

export default Header;

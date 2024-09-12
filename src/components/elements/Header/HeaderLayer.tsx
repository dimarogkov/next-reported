import { useHeader } from '@/src/store/header';
import cn from 'classnames';

const HeaderLayer = () => {
    const { isMenuOpen, isSearchOpen, closeMenu } = useHeader((state) => state);
    const isVisible = isMenuOpen || isSearchOpen;

    return (
        <div
            onClick={closeMenu}
            className={cn(
                'fixed z-10 top-0 left-0 w-full h-full cursor-pointer bg-black/40 transition-all duration-300',
                {
                    'opacity-0 invisible': !isVisible,
                    'opacity-1 visible': isVisible,
                }
            )}
        />
    );
};

export default HeaderLayer;

import { useHeader } from '@/src/store/header';
import { Search, Menu } from 'lucide-react';

const HeaderNavigation = () => {
    const { toggleMenu, toggleSearch } = useHeader((state) => state);

    return (
        <div className='flex items-center justify-end gap-6 lg:gap-4 xl:gap-8 lg:min-w-52 xl:min-w-60'>
            <button
                type='button'
                className='hidden sm:flex items-center h-9 lg:h-10 font-medium text-sm text-black px-4 lg:px-5 rounded outline-none border border-black transition-colors duration-300 hover:bg-black hover:text-white'
            >
                Subscribe
            </button>

            <div className='flex justify-between gap-3 lg:gap-4'>
                <button
                    type='button'
                    onClick={toggleSearch}
                    className='outline-none text-black transition-colors duration-300 hover:text-red'
                >
                    <Search className='w-6 lg:w-7 h-6 lg:h-7 stroke-1' />
                </button>

                <span className='w-[1px] h-7 lg:h-8 bg-gray' />

                <button
                    type='button'
                    onClick={toggleMenu}
                    className='outline-none text-black transition-colors duration-300 hover:text-red'
                >
                    <Menu className='w-7 lg:w-8 h-7 lg:h-8 stroke-1' />
                </button>
            </div>
        </div>
    );
};

export default HeaderNavigation;

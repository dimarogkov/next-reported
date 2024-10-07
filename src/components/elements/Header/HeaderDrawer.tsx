import Link from 'next/link';
import { useHeader } from '@/src/store/header';
import { menu } from '@/src/variables/menu';
import { EnumBtn } from '@/src/types/enums';

import Logo from '../Logo';
import Socials from '../Socials';
import { Btn, Text } from '../../ui';
import { X } from 'lucide-react';
import cn from 'classnames';
import { useEffect } from 'react';

type Props = {
    pathname: string;
};

const HeaderDrawer: React.FC<Props> = ({ pathname }) => {
    const { isMenuOpen, isSubscribeOpen, setIsMenuOpen, setIsSubscribeOpen, closeMenu } = useHeader((state) => state);
    const { deskMenu, burgerMenu } = menu;

    useEffect(() => {
        setIsMenuOpen(false);
    }, [isSubscribeOpen, setIsMenuOpen]);

    return (
        <div
            className={cn(
                'fixed z-10 top-0 right-0 w-full sm:w-[450px] h-full overflow-auto bg-white transition-transform duration-300',
                {
                    'translate-x-full sm:translate-x-[450px]': !isMenuOpen,
                    'translate-x-0': isMenuOpen,
                }
            )}
        >
            <div className='flex flex-col w-full h-full'>
                <div className='w-full p-6 lg:p-10 border-b border-gray'>
                    <button
                        type='button'
                        className='absolute top-2 sm:top-4 right-2 sm:right-4 outline-0 text-black transition-colors duration-300 hover:text-red'
                        onClick={closeMenu}
                    >
                        <X className='w-7 lg:w-8 h-7 lg:h-8' />
                    </button>

                    <Logo className='mb-3 lg:mb-4 last:mb-0' />

                    <Text className='mb-3 sm:mb-0 last:mb-0'>
                        A reporter gathers, investigates, and presents news and current events through various media
                        platforms.
                    </Text>

                    <Btn onClick={() => setIsSubscribeOpen(true)} btnType={EnumBtn.dark} className='sm:hidden w-full'>
                        Subscribe
                    </Btn>
                </div>

                <ul className='flex sm:block flex-col flex-grow items-center justify-center w-full p-6 lg:p-10'>
                    {deskMenu.map(({ id, href, name }) => (
                        <li key={id} className='block lg:hidden sm:w-full mb-6 last:mb-0'>
                            <Link
                                href={href}
                                className={cn(
                                    'font-semibold text-sm uppercase text-black transition-colors duration-300 hover:text-red',
                                    {
                                        'pointer-events-none text-red': pathname === href,
                                    }
                                )}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}

                    {burgerMenu.map(({ id, href, name }) => (
                        <li key={id} className='sm:w-full mb-6 lg:mb-8 last:mb-0'>
                            <Link
                                href={href}
                                className={cn(
                                    'font-semibold text-sm lg:text-base uppercase text-black transition-colors duration-300 hover:text-red',
                                    {
                                        'pointer-events-none text-red': pathname === href,
                                    }
                                )}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Socials className='justify-center sm:justify-start px-6 lg:px-10 py-5 border-t border-gray' />
            </div>
        </div>
    );
};

export default HeaderDrawer;

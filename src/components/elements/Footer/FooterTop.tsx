import Link from 'next/link';
import { EnumLogo, EnumSocials } from '@/src/types/enums';
import { menu } from '@/src/variables/menu';

import Logo from '../Logo';
import Socials from '../Socials';
import { Text } from '../../ui';

const FooterTop: React.FC = () => {
    const { deskMenu, burgerMenu } = menu;

    return (
        <div className='w-full px-4 sm:px-5 py-8 sm:py-10 md:py-12 xl:py-16'>
            <div className='flex flex-wrap justify-between w-full max-w-screen-2xl m-auto'>
                <div className='flex flex-col justify-between w-full md:max-w-[400px] lg:max-w-[440px] mb-8 sm:mb-10 md:mb-0 last:mb-0'>
                    <div className='w-full mb-5 last:mb-0'>
                        <Logo type={EnumLogo.light} className='mb-3 lg:mb-4 last:mb-0' />

                        <Text className='text-white/80'>
                            A reporter gathers, investigates, and presents news and current events through various media
                            platforms.
                        </Text>
                    </div>

                    <Socials type={EnumSocials.light} />
                </div>

                <div className='flex gap-20 sm:gap-32 xl:gap-36 text-white/80'>
                    <ul>
                        {deskMenu.map(({ id, href, name }) => (
                            <li key={id} className='w-full mb-3 last:mb-0'>
                                <Link href={href} className='text-base hover:underline'>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul>
                        {burgerMenu.map(({ id, href, name }) => (
                            <li key={id} className='w-full mb-3 last:mb-0'>
                                <Link href={href} className='text-base hover:underline'>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;

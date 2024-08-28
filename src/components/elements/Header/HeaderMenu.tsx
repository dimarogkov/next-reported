import Link from 'next/link';
import { menu } from '@/src/variables/menu';
import cn from 'classnames';

type Props = {
    pathname: string;
};

const HeaderMenu: React.FC<Props> = ({ pathname }) => {
    const { deskMenu } = menu;

    return (
        <ul className='hidden lg:flex gap-6 xl:gap-10'>
            {deskMenu.map(({ id, href, name }) => (
                <li key={id}>
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
        </ul>
    );
};

export default HeaderMenu;

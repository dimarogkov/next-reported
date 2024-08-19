import Link from 'next/link';
import { menu } from '@/src/variables/menu';

type Props = {
    className?: string;
};

const HeaderMenu: React.FC<Props> = ({ className = '' }) => {
    const { deskMenu } = menu;

    return (
        <ul className={`hidden lg:flex gap-6 xl:gap-10 ${className}`}>
            {deskMenu.map(({ id, href, name }) => (
                <li key={id}>
                    <Link
                        href={href}
                        className='font-semibold text-sm uppercase text-black transition-colors duration-300 hover:text-red'
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default HeaderMenu;

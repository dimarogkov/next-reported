'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menu } from '@/src/variables/menu';
import cn from 'classnames';

type Props = {
    className?: string;
};

const CategoryList: React.FC<Props> = ({ className = '' }) => {
    const pathname = usePathname();
    const { deskMenu } = menu;

    return (
        <ul className={`relative w-full ${className}`}>
            {deskMenu.map(({ id, href, name, icon: CategoryIcon }) => (
                <li className='group mb-4 last:mb-0' key={id}>
                    <Link
                        href={href}
                        className={cn(
                            'flex items-center gap-3 w-full pb-2 border-b-2 border-gray group-last:pb-0 group-last:border-0',
                            {
                                'pointer-events-none': pathname === href,
                            }
                        )}
                    >
                        <CategoryIcon
                            className={cn('w-7 h-7 stroke-1 transition-colors duration-300', {
                                'text-black group-hover:text-black/60': pathname !== href,
                                'text-red': pathname === href,
                            })}
                        />

                        <span
                            className={cn('text-base transition-colors duration-300', {
                                'text-black group-hover:text-black/60': pathname !== href,
                                'text-red': pathname === href,
                            })}
                        >
                            {name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CategoryList;

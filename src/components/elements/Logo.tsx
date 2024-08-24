import Link from 'next/link';
import { EnumLogo } from '@/src/types/enums';
import { PROJECT_NAME } from '@/src/variables';
import { Newspaper } from 'lucide-react';
import cn from 'classnames';

type Props = {
    type?: string;
    className?: string;
};

const Logo: React.FC<Props> = ({ type = EnumLogo.default, className = '' }) => {
    return (
        <Link
            href='/'
            className={`flex items-center gap-2 transition-opacity duration-300 hover:opacity-75 ${className}`}
        >
            <Newspaper
                className={cn('w-6 lg:w-7 h-6 lg:h-7', {
                    'text-black': type === EnumLogo.default,
                    'text-white/90': type === EnumLogo.light,
                })}
            />

            <span
                className={cn('font-black text-xl lg:text-2xl uppercase', {
                    'text-black': type === EnumLogo.default,
                    'text-white/90': type === EnumLogo.light,
                })}
            >
                {PROJECT_NAME}
            </span>
        </Link>
    );
};

export default Logo;

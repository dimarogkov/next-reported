import { AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { EnumBtn } from '@/src/types/enums/Btn';
import { ArrowUpRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
    btnType?: string;
}

const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, btnType = EnumBtn.default, className = '', ...props }, ref) => (
        <Link
            ref={ref}
            {...props}
            href={href}
            className={cn(
                `flex items-center justify-center gap-1 w-full sm:w-fit sm:min-w-32 h-10 lg:h-11 font-media px-4 rounded text-white transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'bg-red': btnType === EnumBtn.default || btnType === EnumBtn.withIcon,
                    'bg-black': btnType === EnumBtn.dark || btnType === EnumBtn.darkWithIcon,
                }
            )}
        >
            <span>{props.children}</span>

            {(btnType === EnumBtn.withIcon || btnType === EnumBtn.darkWithIcon) && (
                <ArrowUpRight className='w-5 h-5 text-white' />
            )}
        </Link>
    )
);

BtnLink.displayName = 'BtnLink';
export default BtnLink;

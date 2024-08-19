import { ButtonHTMLAttributes, forwardRef } from 'react';
import { EnumBtn } from '@/src/types/enums/Btn';
import { ArrowUpRight } from 'lucide-react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: string;
    className?: string;
}

const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ btnType = EnumBtn.default, className = '', ...props }, ref) => (
        <button
            ref={ref}
            {...props}
            className={cn(
                `flex items-center justify-center gap-1 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 px-4 rounded text-white transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'pointer-events-none bg-gray': props.disabled,
                    'bg-red':
                        (!props.disabled && btnType === EnumBtn.default) ||
                        (!props.disabled && btnType === EnumBtn.withIcon),
                    'bg-black':
                        (!props.disabled && btnType === EnumBtn.dark) ||
                        (!props.disabled && btnType === EnumBtn.darkWithIcon),
                }
            )}
        >
            <span>{props.children}</span>

            {(btnType === EnumBtn.withIcon || btnType === EnumBtn.darkWithIcon) && (
                <ArrowUpRight className='w-5 h-5 text-white' />
            )}
        </button>
    )
);

Btn.displayName = 'Btn';
export default Btn;

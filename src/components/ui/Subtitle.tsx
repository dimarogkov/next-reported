import { HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumSubtitle } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    subType?: string;
    className?: string;
}

const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ subType = EnumSubtitle.h2, className = '', ...props }, ref) => (
        <h3
            ref={ref}
            {...props}
            className={cn(`w-full text-2xl font-medium ${className}`, {
                'sm:text-3xl lg:text-4xl': subType === EnumSubtitle.h2,
            })}
        />
    )
);

Subtitle.displayName = 'Subtitle';
export default Subtitle;

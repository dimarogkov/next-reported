import { HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumText } from '@/src/types/enums/Text';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    textSize?: string;
    className?: string;
}

const Text: React.FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ textSize = EnumText.default, className = '', ...props }, ref) => (
        <p
            ref={ref}
            {...props}
            className={cn(`relative ${className}`, {
                'text-base md:text-lg': textSize === EnumText.large,
                'text-base': textSize === EnumText.default,
                'text-sm': textSize === EnumText.small,
            })}
        />
    )
);

Text.displayName = 'Text';
export default Text;

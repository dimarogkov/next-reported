import { HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumError } from '@/src/types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    errorType?: string;
}

const ErrorMessage: React.FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ errorType = EnumError.red, ...props }, ref) => (
        <p
            ref={ref}
            {...props}
            className={cn(`w-full font-medium text-sm`, {
                'text-white': errorType === EnumError.white,
                'text-red': errorType === EnumError.red,
            })}
        />
    )
);

ErrorMessage.displayName = 'ErrorMessage';
export default ErrorMessage;

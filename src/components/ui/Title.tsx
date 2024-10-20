import { HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumTitle } from '@/src/types/enums';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    titleType?: string;
    className?: string;
}

const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ titleType = EnumTitle.h1, className = '', ...props }, ref) => (
        <>
            {titleType === EnumTitle.h1 && (
                <h1
                    ref={ref}
                    {...props}
                    className={`w-full font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[3.5rem] xl:leading-[4.25rem] ${className}`}
                />
            )}

            {titleType === EnumTitle.h2 && (
                <h2
                    ref={ref}
                    {...props}
                    className={`w-full font-semibold text-2xl sm:text-3xl lg:text-4xl ${className}`}
                />
            )}

            {titleType === EnumTitle.h3 && (
                <h3 ref={ref} {...props} className={`w-full font-semibold text-2xl ${className}`} />
            )}
        </>
    )
);

Title.displayName = 'Title';
export default Title;

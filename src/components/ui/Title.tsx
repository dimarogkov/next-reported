import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h1
        ref={ref}
        {...props}
        className={`w-full text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black ${className}`}
    />
));

Title.displayName = 'Title';
export default Title;

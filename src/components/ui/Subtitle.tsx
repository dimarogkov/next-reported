import { HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    className?: string;
}

const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h3 ref={ref} {...props} className={`w-full text-lg md:text-xl lg:text-3xl font-medium ${className}`} />
));

Subtitle.displayName = 'Subtitle';
export default Subtitle;

import { HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    className?: string;
}

const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(({ className = '', ...props }, ref) => (
    <h3 ref={ref} {...props} className={`relative w-full text-xl sm:text-2xl font-medium ${className}`} />
));

Subtitle.displayName = 'Subtitle';
export default Subtitle;

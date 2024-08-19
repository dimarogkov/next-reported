import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

const Skeleton: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => (
    <div ref={ref} {...props} className={`absolute top-0 left-0 w-full h-full skeleton ${className}`}></div>
));

Skeleton.displayName = 'Skeleton';
export default Skeleton;

import { forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {}

const Skeleton: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => (
    <div ref={ref} {...props} className='absolute top-0 left-0 w-full h-full skeleton' />
));

Skeleton.displayName = 'Skeleton';
export default Skeleton;

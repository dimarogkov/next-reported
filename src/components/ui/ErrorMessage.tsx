import { HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {}

const ErrorMessage: React.FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ ...props }, ref) => (
    <p ref={ref} {...props} className='w-full font-medium text-sm text-red' />
));

ErrorMessage.displayName = 'ErrorMessage';
export default ErrorMessage;

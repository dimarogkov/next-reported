import { forwardRef, RefAttributes, TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>, RefAttributes<HTMLTextAreaElement> {
    className?: string;
}

const Area: React.FC<Props> = forwardRef<HTMLTextAreaElement, Props>(({ className = '', ...props }, ref) => (
    <textarea
        ref={ref}
        {...props}
        className={`relative w-full h-36 text-base px-5 py-3 rounded outline-none resize-none border border-gray bg-white focus:border-black transition-all duration-300 ${className}`}
    />
));

Area.displayName = 'Area';
export default Area;

import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={`relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray bg-transparent transition-all duration-300 ${className}`}
        />
    );
});

Input.displayName = 'Input';
export default Input;

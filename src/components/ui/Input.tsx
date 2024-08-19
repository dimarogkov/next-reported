import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={`w-full h-10 lg:h-11 text-base text-black px-5 rounded outline-none border border-gray bg-white transition-all duration-300 focus:border-black ${className}`}
        />
    );
});

Input.displayName = 'Input';
export default Input;

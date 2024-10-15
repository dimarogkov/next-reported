import { UseFormRegister } from 'react-hook-form';
import { EnumContactForm } from '@/src/types/enums';
import { IContactForm } from '@/src/types/interfaces/ContactForm';

import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
    registerName?: EnumContactForm;
    register?: UseFormRegister<IContactForm>;
}

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ className = '', registerName = EnumContactForm.name, register = () => {}, ...props }, ref) => {
        return (
            <input
                ref={ref}
                {...props}
                className={`relative w-full h-10 lg:h-11 text-base px-5 rounded outline-none border border-gray bg-white focus:border-black transition-all duration-300 ${className}`}
                {...register(registerName)}
            />
        );
    }
);

Input.displayName = 'Input';
export default Input;

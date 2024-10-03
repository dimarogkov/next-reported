import { ButtonHTMLAttributes, forwardRef } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const PaginationBtn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        className={`flex items-center justify-center w-8 h-8 text-base rounded border outline-none transition-all duration-300 hover:border-red hover:bg-red hover:text-white ${className}`}
    />
));

PaginationBtn.displayName = 'PaginationBtn';
export default PaginationBtn;

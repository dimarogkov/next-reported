type Props = {
    children: React.ReactNode;
    className?: string;
};

const NewsRow: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <section className={`relative grid lg:grid-cols-3 gap-12 lg:gap-4 xl:gap-5 w-full ${className}`}>
            {children}
        </section>
    );
};

export default NewsRow;

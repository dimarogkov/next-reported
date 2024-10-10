import { Title } from '../ui';

type Props = {
    title: string;
    className?: string;
};

const Banner: React.FC<Props> = ({ title, className = '' }) => {
    return (
        <section
            className={`relative w-full text-center px-5 md:px-10 py-8 md:py-12 lg:py-16 rounded-md bg-gray mt-10 sm:mt-0 ${className}`}
        >
            <Title>{title}</Title>
        </section>
    );
};

export default Banner;

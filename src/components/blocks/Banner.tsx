import { Text, Title } from '../ui';

type Props = {
    title: string;
    text?: string;
    className?: string;
};

const Banner: React.FC<Props> = ({ title, text, className = '' }) => {
    return (
        <section
            className={`relative w-full text-center px-5 md:px-10 py-12 md:py-16 lg:py-20 rounded-md bg-gray mt-10 sm:mt-0 ${className}`}
        >
            <Title className='mb-3 md:mb-4 last:mb-0'>{title}</Title>
            {text && <Text className='sm:max-w-[500px] sm:m-auto'>{text}</Text>}
        </section>
    );
};

export default Banner;

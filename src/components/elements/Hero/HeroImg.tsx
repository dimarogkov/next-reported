import Image from 'next/image';

type Props = {
    src: string;
    alt: string;
};

const HeroImg: React.FC<Props> = ({ src, alt }) => {
    return (
        <div className='relative w-full h-0 pb-[65%] sm:pb-[60%] lg:pb-[35%] rounded-md overflow-hidden bg-gray'>
            <Image
                src={src}
                alt={alt}
                className='absolute top-0 left-0 w-full h-full object-cover object-center'
                sizes='100%'
                priority
                fill
            />
        </div>
    );
};

export default HeroImg;

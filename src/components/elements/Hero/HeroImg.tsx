'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '../../ui';

type Props = {
    src: string;
    alt: string;
};

const HeroImg: React.FC<Props> = ({ src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        src ? setIsLoading(false) : setIsLoading(true);
    }, [src]);

    return (
        <div className='relative w-full h-0 pb-[65%] sm:pb-[60%] lg:pb-[35%] rounded-md overflow-hidden bg-gray'>
            {isLoading && <Skeleton />}

            {!isLoading && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                />
            )}
        </div>
    );
};

export default HeroImg;

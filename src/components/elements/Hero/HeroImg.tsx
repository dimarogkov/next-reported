import Image from 'next/image';
import { Skeleton } from '../../ui';
import { useState } from 'react';

type Props = {
    src: string | undefined;
    alt: string | undefined;
    isLoading: boolean;
    className?: string;
};

const HeroImg: React.FC<Props> = ({ src, alt, isLoading, className = '' }) => {
    const [isImgLoad, setIsImgLoad] = useState(true);

    return (
        <div
            className={`relative w-full h-0 pb-[65%] sm:pb-[60%] md:pb-[35%] rounded-md overflow-hidden bg-gray ${className}`}
        >
            {isLoading && <Skeleton />}

            {isImgLoad && src && (
                <Image
                    src={src}
                    alt={alt || ''}
                    fill
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                    onError={() => setIsImgLoad(false)}
                />
            )}
        </div>
    );
};

export default HeroImg;

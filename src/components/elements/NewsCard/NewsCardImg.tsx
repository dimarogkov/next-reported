import Image from 'next/image';
import { EnumCard } from '@/src/types/enums';
import { Skeleton } from '../../ui';
import cn from 'classnames';

type Props = {
    type: string;
    src: string;
    alt: string;
    isLoading: boolean;
    className?: string;
};

const NewsCardImg: React.FC<Props> = ({ type, src, alt, isLoading, className = '' }) => {
    return (
        <div
            className={cn(`relative w-full h-0 pb-[65%] rounded-lg overflow-hidden bg-gray last:mb-0 ${className}`, {
                'sm:w-[32%] sm:pb-[32%] mb-4 sm:mb-0': type === EnumCard.small,
                'mb-6': type === EnumCard.large,
                'mb-4': type === EnumCard.default,
            })}
        >
            {isLoading && <Skeleton />}

            {src && (
                <Image
                    src={src}
                    alt={alt}
                    className='absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform transition-transform duration-500 group-hover:scale-110'
                    fill
                />
            )}
        </div>
    );
};

export default NewsCardImg;

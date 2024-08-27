import Image from 'next/image';
import { EnumCard } from '@/src/types/enums';
import cn from 'classnames';

type Props = {
    type: string;
    src: string;
    alt: string;
};

const NewsCardImg: React.FC<Props> = ({ type, src, alt }) => {
    return (
        <div
            className={cn(
                'relative w-full h-0 pb-[65%] rounded-lg overflow-hidden border border-gray bg-gray last:mb-0',
                {
                    'lg:w-[40%] lg:pb-[32%] mb-4 lg:mb-0': type === EnumCard.small,
                    'mb-5': type === EnumCard.large,
                    'mb-4': type === EnumCard.default,
                }
            )}
        >
            <Image
                src={src}
                alt={alt}
                className='absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform transition-transform duration-500 group-hover:scale-110'
                fill
            />
        </div>
    );
};

export default NewsCardImg;

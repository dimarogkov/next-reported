import { EnumCard } from '@/src/types/enums';
import { Skeleton } from '../../ui';
import cn from 'classnames';

type Props = {
    cardType?: string;
    className?: string;
};

const NewsCardImgSkeleton = ({ cardType }: { cardType: string }) => {
    return (
        <div
            className={cn(
                'relative w-full h-0 pb-[65%] rounded-lg overflow-hidden border border-gray bg-gray last:mb-0',
                {
                    'lg:w-[40%] lg:pb-[32%] mb-4 lg:mb-0': cardType === EnumCard.small,
                    'mb-5': cardType === EnumCard.large,
                    'mb-4': cardType === EnumCard.default,
                }
            )}
        >
            <Skeleton />
        </div>
    );
};

const NewsCardContentSkeleton = ({ cardType }: { cardType: string }) => {
    return (
        <div
            className={cn('w-full mb-4 sm:mb-5 last:mb-0', {
                'flex-grow': cardType === EnumCard.large,
            })}
        >
            {(cardType === EnumCard.default || cardType === EnumCard.small) && (
                <>
                    <div className='relative w-32 h-8 mb-3 last:mb-0'>
                        <Skeleton />
                    </div>

                    <div className='flex flex-wrap gap-2 w-full'>
                        <div className='relative w-[90%] lg:w-full h-4'>
                            <Skeleton />
                        </div>
                        <div className='relative w-[80%] lg:w-[85%] h-4'>
                            <Skeleton />
                        </div>
                    </div>
                </>
            )}

            {cardType === EnumCard.large && (
                <>
                    <div className='relative w-[75%] md:w-[65%] h-8 mb-3 last:mb-0'>
                        <Skeleton />
                    </div>

                    <div className='flex flex-wrap gap-2 w-full'>
                        <div className='relative w-full h-4'>
                            <Skeleton />
                        </div>
                        <div className='relative w-[95%] h-4'>
                            <Skeleton />
                        </div>
                        <div className='relative w-[85%] h-4'>
                            <Skeleton />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const NewsCardAuthorsSkeleton = () => {
    return (
        <div className='relative flex lg:max-w-[50%] items-center gap-2'>
            <div className='avatar-group -space-x-5 rtl:space-x-reverse'>
                <div className='avatar w-11 h-11'>
                    <div className='w-full'>
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <Skeleton />
                        </div>
                    </div>
                </div>
                <div className='avatar w-11 h-11'>
                    <div className='w-full'>
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <Skeleton />
                        </div>
                    </div>
                </div>
                <div className='avatar w-11 h-11'>
                    <div className='w-full'>
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewsCardSkeleton: React.FC<Props> = ({ cardType = EnumCard.default, className = '' }) => {
    return (
        <div
            className={cn(`relative group ${className}`, {
                'lg:flex lg:flex-col w-full': cardType === EnumCard.large,
                'lg:flex lg:items-center lg:justify-between w-full': cardType === EnumCard.small,
                'w-full block': cardType === EnumCard.default,
            })}
        >
            <NewsCardImgSkeleton cardType={cardType} />

            <div
                className={cn('w-full', {
                    'flex flex-col flex-grow': cardType === EnumCard.large,
                    'lg:w-[57%]': cardType === EnumCard.small,
                })}
            >
                <NewsCardContentSkeleton cardType={cardType} />

                {cardType === EnumCard.large && (
                    <div className='flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 w-full mb-5 last:mb-0'>
                        <NewsCardAuthorsSkeleton />

                        <div className='relative w-32 h-8'>
                            <Skeleton />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsCardSkeleton;

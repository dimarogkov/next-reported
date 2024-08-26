'use client';
import { useQuery } from '@tanstack/react-query';
import { getNewsByCategory } from '@/src/services/news';
import { EnumBtn, EnumCard } from '@/src/types/enums';

import { NewsCard, NewsCardSkeleton } from '../elements/NewsCard';
import { BtnLink, Skeleton, Subtitle } from '../ui';
import cn from 'classnames';

type Props = {
    title: string;
    category: string;
    className?: string;
};

const NewsCol: React.FC<Props> = ({ title, category, className = '' }) => {
    const { data: newsArr, isLoading } = useQuery({
        queryFn: () => getNewsByCategory(category),
        select: (data) => data.data.slice(0, 4),
        queryKey: ['news col', category],
        refetchOnWindowFocus: false,
    });

    return (
        <div className={`relative flex flex-col w-full ${className}`}>
            {title && <Subtitle className='hidden lg:block mb-4 xl:mb-5 last:mb-0'>{title}</Subtitle>}

            <div className='flex flex-col flex-grow w-full'>
                {isLoading && (
                    <>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-1 flex-grow gap-6 sm:gap-4 xl:gap-5 w-full mb-5 last:mb-0'>
                            {[0, 1, 2, 3].map((_, index) => (
                                <NewsCardSkeleton
                                    cardType={index === 0 ? EnumCard.default : EnumCard.small}
                                    key={index}
                                    className={cn({ 'flex-grow': index === 0 })}
                                />
                            ))}
                        </div>

                        <div className='relative sm:w-full h-8 lg:h-10'>
                            <Skeleton />
                        </div>
                    </>
                )}

                {newsArr && (
                    <>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-1 flex-grow gap-6 sm:gap-4 xl:gap-5 w-full mb-5 last:mb-0'>
                            {newsArr.map((news, index) => (
                                <NewsCard
                                    news={news}
                                    cardType={index === 0 ? EnumCard.default : EnumCard.small}
                                    key={news.id}
                                    className={cn({ 'flex-grow': index === 0 })}
                                />
                            ))}
                        </div>

                        <BtnLink href={`/${category}`} btnType={EnumBtn.withIcon} className='sm:w-full'>
                            Go to {title}
                        </BtnLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewsCol;

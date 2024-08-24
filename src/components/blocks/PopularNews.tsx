'use client';
import { useQuery } from '@tanstack/react-query';
import { getNewsByCategory } from '@/src/services/news';
import { EnumCard, EnumPopularNews } from '@/src/types/enums';

import NewsCard from './NewsCard';
import { Subtitle } from '../ui';
import cn from 'classnames';

type Props = {
    title: string;
    category: string;
    type?: string;
    className?: string;
};

const PopularNews: React.FC<Props> = ({ title, category, type = EnumPopularNews.default, className = '' }) => {
    const { data: newsArr, isLoading } = useQuery({
        queryFn: () => getNewsByCategory(category),
        select: (data) => data.data.slice(0, 5),
        queryKey: ['popular news', category],
        refetchOnWindowFocus: false,
    });

    return (
        <section className={`relative w-full ${className}`}>
            {title && <Subtitle className='hidden lg:block mb-5 last:mb-0'>{title}</Subtitle>}

            <div
                className={cn('grid gap-6 sm:gap-4 xl:gap-5 w-full', {
                    'sm:grid-cols-2 lg:grid-cols-12 sm:grid-rows-4 lg:grid-rows-2': type === EnumPopularNews.default,
                    'sm:grid-cols-2 lg:grid-cols-12 sm:grid-rows-4': type === EnumPopularNews.secondary,
                })}
            >
                {type === EnumPopularNews.default &&
                    newsArr?.map((news, index) => (
                        <NewsCard
                            news={news}
                            isLoading={isLoading}
                            cardType={index === 0 ? EnumCard.large : EnumCard.default}
                            key={news.id}
                            className={cn({
                                'sm:col-span-2 lg:col-span-6 row-span-2': index === 0,
                                'sm:col-span-1 lg:col-span-3 row-span-1': index !== 0,
                            })}
                        />
                    ))}

                {type === EnumPopularNews.secondary &&
                    newsArr?.map((news, index) => (
                        <NewsCard
                            news={news}
                            isLoading={isLoading}
                            cardType={index === 0 ? EnumCard.large : EnumCard.small}
                            key={news.id}
                            className={cn({
                                'sm:col-span-2 lg:col-span-7 row-span-2 lg:row-span-4': index === 0,
                                'sm:col-span-1 lg:col-span-5 row-span-1': index !== 0,
                            })}
                        />
                    ))}
            </div>
        </section>
    );
};

export default PopularNews;

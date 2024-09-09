'use client';
import { Suspense } from 'react';
import { EnumCard } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import NewsCardImg from './NewsCardImg';
import NewsCardContent from './NewsCardContent';
import NewsCardSkeleton from './NewsCardSkeleton';
import { AuthorInfo } from '../Author';
import DateInfo from '../DateInfo';
import cn from 'classnames';

type Props = {
    news: INews;
    cardType?: string;
    className?: string;
};

const NewsCard: React.FC<Props> = ({ news, cardType = EnumCard.default, className = '' }) => {
    const { id, image, category, title, summary, authors, publish_date } = news;

    // `/${category}/${id}`

    return (
        <Suspense fallback={<NewsCardSkeleton cardType={cardType} className={className} />}>
            <div
                className={cn(`relative cursor-pointer ${className}`, {
                    'lg:flex lg:flex-col w-full': cardType === EnumCard.large,
                    'lg:flex lg:items-center lg:justify-between w-full': cardType === EnumCard.small,
                    'w-full block': cardType === EnumCard.default,
                })}
            >
                <NewsCardImg type={cardType} href={`/${category}/${id}`} src={image} alt={title} />

                <div
                    className={cn('w-full', {
                        'flex flex-col flex-grow': cardType === EnumCard.large,
                        'lg:w-[57%]': cardType === EnumCard.small,
                    })}
                >
                    <NewsCardContent
                        type={cardType}
                        href={`/${category}/${id}`}
                        title={title}
                        summary={summary}
                        date={publish_date}
                        className='mb-4 sm:mb-5 last:mb-0'
                    />

                    {cardType === EnumCard.large && (
                        <div className='flex items-center justify-between gap-4 sm:gap-0 w-full mb-5 last:mb-0'>
                            <AuthorInfo authors={authors} />
                            <DateInfo date={publish_date} />
                        </div>
                    )}
                </div>
            </div>
        </Suspense>
    );
};

export default NewsCard;

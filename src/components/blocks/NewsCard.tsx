'use client';
import { useRouter } from 'next/navigation';
import { EnumCard } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import { NewsCardContent, NewsCardImg } from '../elements/NewsCard';
import { AuthorInfo } from '../elements/Author';
import { DateInfo } from '../elements';
import cn from 'classnames';

type Props = {
    news: INews;
    cardType?: string;
    className?: string;
    isLoading: boolean;
};

const NewsCard: React.FC<Props> = ({ news, isLoading, cardType = EnumCard.default, className = '' }) => {
    const router = useRouter();

    const { id, image, title, summary, authors, publish_date } = news;

    const navigateTo = () => router.push(`/news/${id}`);

    return (
        <div
            onClick={navigateTo}
            className={cn(`relative cursor-pointer group ${className}`, {
                'lg:flex lg:flex-col w-full': cardType === EnumCard.large,
                'lg:flex lg:items-center lg:justify-between w-full': cardType === EnumCard.small,
                'w-full block': cardType === EnumCard.default,
            })}
        >
            <NewsCardImg type={cardType} src={image} alt={title} isLoading={isLoading} />

            <div
                className={cn('w-full', {
                    'flex flex-col flex-grow': cardType === EnumCard.large,
                    'lg:w-[57%]': cardType === EnumCard.small,
                })}
            >
                <NewsCardContent
                    type={cardType}
                    title={title}
                    summary={summary}
                    date={publish_date}
                    className='mb-5 last:mb-0'
                />

                {cardType === EnumCard.large && (
                    <div className='flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 w-full mb-5 last:mb-0'>
                        <AuthorInfo authors={authors} />
                        <DateInfo date={publish_date} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsCard;

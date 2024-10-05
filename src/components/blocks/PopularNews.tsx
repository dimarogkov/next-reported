import { getNewsByCategory } from '@/src/services/news';
import { EnumBtn, EnumCard, EnumPopularNews } from '@/src/types/enums';

import { NewsCard } from '../elements/NewsCard';
import { BtnLink, Subtitle } from '../ui';
import cn from 'classnames';

type Props = {
    title: string;
    category: string;
    type?: string;
    className?: string;
};

const PopularNews: React.FC<Props> = async ({ title, category, type = EnumPopularNews.default, className = '' }) => {
    const newsArr = await getNewsByCategory(category).then((data) => data.slice(0, 5));
    const isDefaultPopularNews = type === EnumPopularNews.default;

    return (
        <section className={`relative w-full ${className}`}>
            {title && (
                <div className='flex items-center justify-between w-full pb-2 border-b-2 border-black mb-4 xl:mb-5 last:mb-0'>
                    <Subtitle className='block sm:max-w-[60%]'>{title}</Subtitle>

                    <BtnLink href={`/${category}`} btnType={EnumBtn.darkWithIcon} className='hidden sm:flex'>
                        Go to {title}
                    </BtnLink>
                </div>
            )}

            <div
                className={cn('grid gap-6 sm:gap-4 xl:gap-5 w-full', {
                    'sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2': type === EnumPopularNews.default,
                    'sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-4': type === EnumPopularNews.secondary,
                })}
            >
                {isDefaultPopularNews &&
                    newsArr.map((news, index) => (
                        <NewsCard
                            news={news}
                            cardType={index === 0 ? EnumCard.large : EnumCard.default}
                            key={crypto.randomUUID()}
                            className={cn({
                                'sm:col-span-2 lg:col-span-6 lg:row-span-2': index === 0,
                                'sm:col-span-1 lg:col-span-3 lg:row-span-1': index !== 0,
                            })}
                        />
                    ))}

                {!isDefaultPopularNews &&
                    newsArr.map((news, index) => (
                        <NewsCard
                            news={news}
                            cardType={index === 0 ? EnumCard.large : EnumCard.small}
                            key={crypto.randomUUID()}
                            className={cn({
                                'sm:col-span-2 lg:col-span-7 lg:row-span-4': index === 0,
                                'sm:col-span-1 lg:col-span-5 lg:row-span-1': index !== 0,
                            })}
                        />
                    ))}
            </div>
        </section>
    );
};

export default PopularNews;

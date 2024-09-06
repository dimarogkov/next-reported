import { capitalizeFirstLetter } from '@/src/helpers';
import { getNewsByCategory } from '@/src/services/news';
import { EnumCard, EnumSubscribe } from '@/src/types/enums';

import { NewsCard } from '../elements/NewsCard';
import { CategoryList } from '../elements';
import Subscribe from './Subscribe';
import { Title } from '../ui';

type Props = {
    category: string;
    className?: string;
};

const CategoryNews: React.FC<Props> = async ({ category, className = '' }) => {
    const newsArr = await getNewsByCategory(category);
    const categoryName = capitalizeFirstLetter(category);

    return (
        <section className={`relative w-full ${className}`}>
            <div className='w-full pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-b-2 border-black mb-6 sm:mb-8 lg:mb-10 last:mb-0'>
                <Title>{categoryName} News</Title>
            </div>

            <div className='lg:flex lg:items-start lg:justify-between w-full'>
                <div className='grid sm:grid-cols-2 gap-5 lg:gap-6 w-full lg:w-[67%] xl:w-[70%] mb-10 sm:mb-12 lg:mb-0 last:mb-0'>
                    {newsArr.map((news) => (
                        <NewsCard news={news} cardType={EnumCard.large} key={news.id} />
                    ))}
                </div>

                <div className='sm:sticky sm:top-24 lg:top-28 w-full lg:w-[30%] xl:w-[25%]'>
                    <CategoryList className='mb-10 sm:mb-12 last:mb-0' />
                    <Subscribe type={EnumSubscribe.small} />
                </div>
            </div>
        </section>
    );
};

export default CategoryNews;

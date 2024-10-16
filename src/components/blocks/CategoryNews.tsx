import { capitalizeFirstLetter } from '@/src/helpers';
import { getNewsByCategory } from '@/src/services/news';
import { EnumSubscribe, EnumTitle } from '@/src/types/enums';

import { CategoryList, CategoryNewsList } from '../elements';
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
                <CategoryNewsList newsArr={newsArr} className='mb-10 sm:mb-12 lg:mb-0 last:mb-0' />

                <div className='sm:sticky sm:top-24 lg:top-28 w-full lg:w-[30%] xl:w-[25%]'>
                    <Title titleType={EnumTitle.h3} className='mb-6 last:mb-0'>
                        Explore by Categories
                    </Title>

                    <CategoryList className='mb-8 last:mb-0' />
                    <Subscribe type={EnumSubscribe.small} />
                </div>
            </div>
        </section>
    );
};

export default CategoryNews;

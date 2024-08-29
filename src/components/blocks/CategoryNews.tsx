import { capitalizeFirstLetter } from '@/src/helpers/capitalizeFirstLetter';
import { getNewsByCategory } from '@/src/services/news';
import { EnumBtn } from '@/src/types/enums';

import { NewsCard } from '../elements/NewsCard';
import { BtnLink, Title } from '../ui';

type Props = {
    category: string;
    className?: string;
};

const CategoryNews: React.FC<Props> = async ({ category, className = '' }) => {
    const newsArr = await getNewsByCategory(category);
    const categoryName = capitalizeFirstLetter(category);

    return (
        <section className={`relative w-full ${className}`}>
            <div className='w-full pb-3 md:pb-4 lg:pb-5 border-b-2 border-black mb-8 lg:mb-10 last:mb-0'>
                <BtnLink href='/' btnType={EnumBtn.withIcon} className='mb-5 last:mb-0'>
                    Go Back
                </BtnLink>

                <Title>{categoryName} News</Title>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 w-full'>
                {newsArr.map((news) => (
                    <NewsCard news={news} key={news.id} />
                ))}
            </div>
        </section>
    );
};

export default CategoryNews;

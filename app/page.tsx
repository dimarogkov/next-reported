import { EnumCategoriesNews, EnumPopularNews } from '@/src/types/enums';
import { Hero, PopularNews, Subscribe } from '@/src/components/blocks';

const HomePage = () => {
    return (
        <>
            <Hero className='my-12 xl:my-14' />

            <PopularNews title='Sports News' category={EnumCategoriesNews.sports} className='mb-12 xl:mb-14' />

            <PopularNews
                title='Editors Choice'
                type={EnumPopularNews.secondary}
                category={EnumCategoriesNews.business}
                className='mb-12 xl:mb-14'
            />

            <Subscribe className='mb-12 xl:mb-14' />
        </>
    );
};

export default HomePage;

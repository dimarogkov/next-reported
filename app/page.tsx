import { EnumCategoriesNews, EnumPopularNews } from '@/src/types/enums';
import { Hero, NewsCol, NewsRow, PopularNews, Subscribe } from '@/src/components/blocks';

const HomePage = () => {
    return (
        <>
            <Hero className='my-10 sm:my-12 lg:my-20 xl:my-28' />

            <PopularNews title='Sports News' category={EnumCategoriesNews.sports} className='mb-12 lg:mb-20 xl:mb-28' />

            <NewsRow className='mb-12 lg:mb-20 xl:mb-28'>
                <NewsCol title='Sports' category={EnumCategoriesNews.sports} />
                <NewsCol title='Politics' category={EnumCategoriesNews.politics} />
                <NewsCol title='Science' category={EnumCategoriesNews.science} />
            </NewsRow>

            <PopularNews
                title='Editors Choice'
                type={EnumPopularNews.secondary}
                category={EnumCategoriesNews.business}
                className='mb-12 lg:mb-20 xl:mb-28'
            />

            <NewsRow className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
                <NewsCol title='Business' category={EnumCategoriesNews.business} />
                <NewsCol title='Health' category={EnumCategoriesNews.health} />
                <NewsCol title='Entertainment' category={EnumCategoriesNews.entertainment} />
            </NewsRow>

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default HomePage;

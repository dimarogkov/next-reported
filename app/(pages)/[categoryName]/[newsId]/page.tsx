import { Metadata } from 'next';
import { capitalizeFirstLetter } from '@/src/helpers';
import { getNewsById } from '@/src/services/news';
import { menu } from '@/src/variables/menu';

import { Breadcrumbs, Categories, NewsCol, NewsDetail, NewsRow, Subscribe, TopAuthors } from '@/src/components/blocks';

type Props = {
    params: {
        newsId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { title } = await getNewsById(params.newsId);

    return {
        title: title,
    };
};

const NewsDetailPage: React.FC<Props> = async ({ params }) => {
    const news = await getNewsById(params.newsId);
    const { deskMenu } = menu;

    const categories = deskMenu
        .map(({ name }) => name.toLowerCase())
        .filter((category) => category !== news.category)
        .slice(0, 3);

    return (
        <>
            <Breadcrumbs className='my-6 xl:my-8' />

            <NewsDetail news={news} className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-8 sm:mt-0' />

            <NewsRow className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24'>
                {categories.map((category) => (
                    <NewsCol title={capitalizeFirstLetter(category)} category={category} key={category} />
                ))}
            </NewsRow>

            <Categories className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <TopAuthors className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default NewsDetailPage;

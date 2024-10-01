import { Metadata } from 'next';
import { getNewsByAuthor } from '@/src/services/news';
import { getAuthorByName } from '@/src/services/authors';
import { getFixedName } from '@/src/helpers';

import { AuthorBanner, AuthorNews, Breadcrumbs, Categories, Subscribe, TopAuthors } from '@/src/components/blocks';

type Props = {
    params: {
        authorName: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const authorName = getFixedName(params.authorName);

    return {
        title: authorName,
    };
};

const AuthorDetailPage: React.FC<Props> = async ({ params }) => {
    const newsArr = await getNewsByAuthor(params.authorName);
    const author = await getAuthorByName(params.authorName);
    const authorName = getFixedName(params.authorName);

    return (
        <>
            <Breadcrumbs className='my-6 xl:my-8' />

            <AuthorBanner author={author} className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-6 sm:mt-0' />

            <AuthorNews author={authorName} newsArr={newsArr} className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Categories className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <TopAuthors className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default AuthorDetailPage;

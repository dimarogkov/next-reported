import { Metadata } from 'next';
import { Breadcrumbs, Categories, Search, Subscribe } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Search Page',
};

const SearchPage = () => {
    return (
        <>
            <Breadcrumbs className='my-6 xl:my-8' />

            <Search className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Categories className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default SearchPage;

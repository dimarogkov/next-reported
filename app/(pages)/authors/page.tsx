import { Suspense } from 'react';
import { Metadata } from 'next';
import { Authors, Banner, Breadcrumbs, Categories, Subscribe } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Authors Page',
};

const AuthorsPage = () => {
    return (
        <>
            <Suspense>
                <Breadcrumbs className='my-6 xl:my-8' />
            </Suspense>

            <Banner
                title='Our Authors'
                text='Get the latest buzz on movies, TV shows, music, and more with our Entertainment coverage.'
                className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-6 sm:mt-0'
            />

            <Authors className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Categories className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default AuthorsPage;

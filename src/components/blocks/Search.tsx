'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchBanner, SearchResults } from '../elements/Search';

type Props = {
    className?: string;
};

const Search: React.FC<Props> = ({ className = '' }) => {
    const searchParams = useSearchParams();
    const queryParams = Object.fromEntries(searchParams.entries());
    const queryKey = Object.keys(queryParams)[0];

    return (
        <Suspense>
            <SearchBanner query={queryKey} queryValue={queryParams[queryKey]} className='mb-10 sm:mb-12 mt-6 sm:mt-0' />

            <SearchResults params={`${queryKey}=${queryParams[queryKey]}`} className={className} />
        </Suspense>
    );
};

export default Search;

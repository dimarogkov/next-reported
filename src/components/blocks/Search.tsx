'use client';
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
        <>
            <SearchBanner query={queryKey} queryValue={queryParams[queryKey]} className={className} />

            <SearchResults params={`${queryKey}=${queryParams[queryKey]}`} className={className} />
        </>
    );
};

export default Search;

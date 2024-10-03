import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getNewsWithParams } from '@/src/services/news';
import { EnumCard } from '@/src/types/enums';

import { NewsCard, NewsCardSkeleton } from '../NewsCard';
import SearchNotFound from './SearchNotFound';
import { Pagination } from '../Pagination';

type Props = {
    params: string;
    className?: string;
};

const SearchResults: React.FC<Props> = ({ params, className = '' }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        return () => setCurrentPage(1);
    }, []);

    const { data: newsArr, isLoading } = useQuery({
        queryFn: () => getNewsWithParams(params),
        queryKey: ['news_with_params', params],
        refetchOnWindowFocus: false,
    });

    const slicedNews = useMemo(() => {
        const startItemNumber = currentPage * itemsPerPage - itemsPerPage;
        const endItemNumber = currentPage * itemsPerPage;

        return newsArr?.slice(startItemNumber, endItemNumber);
    }, [currentPage, newsArr]);

    return (
        <section className={`relative w-full ${className}`}>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-full mb-8 md:mb-10 lg:mb-12 last:mb-0'>
                {isLoading &&
                    [0, 1, 2, 3, 4, 5].map((skeleton) => <NewsCardSkeleton cardType={EnumCard.large} key={skeleton} />)}

                {!isLoading && !newsArr && <SearchNotFound />}

                {slicedNews &&
                    slicedNews.map((news) => (
                        <NewsCard
                            cardType={EnumCard.large}
                            news={news}
                            key={news.id}
                            className='md:flex md:flex-col w-full'
                        />
                    ))}
            </div>

            {newsArr && newsArr.length > itemsPerPage && (
                <Pagination
                    itemsLength={newsArr.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </section>
    );
};

export default SearchResults;

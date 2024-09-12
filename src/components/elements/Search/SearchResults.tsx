import { useQuery } from '@tanstack/react-query';
import { getNewsWithParams } from '@/src/services/news';
import { EnumCard } from '@/src/types/enums';

import { NewsCard, NewsCardSkeleton } from '../NewsCard';
import SearchNotFound from './SearchNotFound';

type Props = {
    params: string;
    className?: string;
};

const SearchResults: React.FC<Props> = ({ params, className = '' }) => {
    const { data: newsArr, isLoading } = useQuery({
        queryFn: () => getNewsWithParams(params),
        queryKey: ['news_with_params', params],
        refetchOnWindowFocus: false,
    });

    return (
        <section className={`relative grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-full ${className}`}>
            {isLoading &&
                [0, 1, 2, 3, 4, 5].map((skeleton) => <NewsCardSkeleton cardType={EnumCard.large} key={skeleton} />)}

            {!isLoading && !newsArr && <SearchNotFound />}

            {newsArr &&
                newsArr.map((news) => (
                    <NewsCard
                        cardType={EnumCard.large}
                        news={news}
                        key={news.id}
                        className='md:flex md:flex-col w-full'
                    />
                ))}
        </section>
    );
};

export default SearchResults;

'use client';
import { useEffect, useMemo, useState } from 'react';
import { INews } from '@/src/types/interfaces/News';
import { EnumCard } from '@/src/types/enums';

import { NewsCard } from './NewsCard';
import { Pagination } from './Pagination';

type Props = {
    newsArr: INews[];
    className?: string;
};

const CategoryNewsList: React.FC<Props> = ({ newsArr, className = '' }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        return () => setCurrentPage(1);
    }, []);

    const slicedNews = useMemo(() => {
        const startItemNumber = currentPage * itemsPerPage - itemsPerPage;
        const endItemNumber = currentPage * itemsPerPage;

        return newsArr.slice(startItemNumber, endItemNumber);
    }, [currentPage, newsArr]);

    return (
        <div className={`relative w-full lg:w-[67%] xl:w-[70%] ${className}`}>
            <div className='grid sm:grid-cols-2 gap-5 lg:gap-6 w-full mb-8 md:mb-10 lg:mb-12 last:mb-0'>
                {slicedNews.map((news) => (
                    <NewsCard news={news} cardType={EnumCard.large} key={crypto.randomUUID()} />
                ))}
            </div>

            <Pagination
                itemsLength={newsArr.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default CategoryNewsList;

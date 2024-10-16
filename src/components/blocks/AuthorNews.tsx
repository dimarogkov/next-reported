'use client';
import { useEffect, useMemo, useState } from 'react';
import { EnumCard, EnumTitle } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import { NewsCard } from '../elements/NewsCard';
import { Pagination } from '../elements/Pagination';
import { Title } from '../ui';

type Props = {
    author: string;
    newsArr: INews[];
    className?: string;
};

const AuthorNews: React.FC<Props> = ({ author, newsArr, className = '' }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        return () => setCurrentPage(1);
    }, []);

    const slicedNews = useMemo(() => {
        const startItemNumber = currentPage * itemsPerPage - itemsPerPage;
        const endItemNumber = currentPage * itemsPerPage;

        return newsArr.slice(startItemNumber, endItemNumber);
    }, [currentPage, newsArr]);

    return (
        <section className={`relative w-full ${className}`}>
            <div className='w-full pb-2 sm:pb-3 border-b-2 border-black mb-4 sm:mb-5 lg:mb-6 last:mb-0'>
                <Title titleType={EnumTitle.h3}>News by {author}</Title>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full mb-8 md:mb-10 lg:mb-12 last:mb-0'>
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
        </section>
    );
};

export default AuthorNews;

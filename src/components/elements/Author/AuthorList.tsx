'use client';
import { useEffect, useMemo } from 'react';
import { useAuthor } from '@/src/store/author';
import { IAuthor } from '@/src/types/interfaces/Author';

import AuthorCard from './AuthorCard';
import { Text } from '../../ui';

type Props = {
    authors: IAuthor[];
    className?: string;
};

const AuthorList: React.FC<Props> = ({ authors, className = '' }) => {
    const { currentPage, setCurrentPage, itemsPerPage, searchValue } = useAuthor((state) => state);

    useEffect(() => {
        return () => setCurrentPage(1);
    }, [setCurrentPage]);

    const filteredAuthors = useMemo(() => {
        const startItemNumber = currentPage * itemsPerPage - itemsPerPage;
        const endItemNumber = currentPage * itemsPerPage;
        let arr = [...authors];

        if (searchValue) {
            arr = arr.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));
        }

        return arr.slice(startItemNumber, endItemNumber);
    }, [authors, currentPage, itemsPerPage, searchValue]);

    return (
        <>
            {!filteredAuthors.length && (
                <Text className='mb-6 sm:mb-8 lg:mb-10 last:mb-0'>No authors found. Try searching again.</Text>
            )}

            {filteredAuthors.length > 0 && (
                <div
                    className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 xl:gap-8 w-full ${className}`}
                >
                    {filteredAuthors.map((author) => (
                        <AuthorCard author={author} key={`${author.name}_${author.id}`} />
                    ))}
                </div>
            )}
        </>
    );
};

export default AuthorList;

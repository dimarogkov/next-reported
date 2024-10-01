'use client';
import { useMemo } from 'react';
import { useAuthor } from '@/src/store/author';
import { IAuthor } from '@/src/types/interfaces/Author';

import AuthorCard from './AuthorCard';
import { Text } from '../../ui';

type Props = {
    authors: IAuthor[];
};

const AuthorList: React.FC<Props> = ({ authors }) => {
    const searchValue = useAuthor((state) => state.searchValue);

    const filteredAuthors = useMemo(() => {
        let arr = [...authors];

        if (searchValue) {
            arr = arr.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));
        }

        return arr;
    }, [authors, searchValue]);

    return (
        <>
            {!filteredAuthors.length && <Text>No authors found. Try searching again.</Text>}

            {filteredAuthors.length > 0 && (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 xl:gap-8 w-full'>
                    {filteredAuthors.map((author) => (
                        <AuthorCard author={author} key={author.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default AuthorList;

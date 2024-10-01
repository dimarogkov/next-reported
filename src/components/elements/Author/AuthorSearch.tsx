/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useCallback, useState } from 'react';
import { useAuthor } from '@/src/store/author';
import { debounce } from '@/src/helpers';

import { Input, Label } from '../../ui';
import { Search } from 'lucide-react';

const AuthorSearch = () => {
    const setSearchValue = useAuthor((state) => state.setSearchValue);
    const [value, setValue] = useState('');

    const applySearchValue = useCallback(debounce(setSearchValue, 700), []);

    const handleSearch = (value: string) => {
        applySearchValue(value);
        setValue(value);
    };

    return (
        <Label className='flex items-center w-full sm:max-w-80'>
            <Search className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
            <Input
                name='search'
                placeholder='Search Author'
                className='pl-9 lg:pl-10'
                value={value}
                onChange={({ target }) => handleSearch(target.value)}
            />
        </Label>
    );
};

export default AuthorSearch;

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useHeader } from '@/src/store/header';
import { EnumBtn } from '@/src/types/enums';

import { Btn, Input, Label } from '../../ui';
import { Search } from 'lucide-react';
import cn from 'classnames';

const HeaderSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const { isSearchOpen, closeMenu } = useHeader((state) => state);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        inputRef.current && inputRef.current.focus();

        return () => {
            setSearchValue('');
        };
    }, [isSearchOpen]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.push(`/search?title=${searchValue.trim().toLowerCase()}`);
        closeMenu();
    };

    return (
        <div
            className={cn(
                'fixed z-10 top-0 lg:top-0 left-0 flex items-center w-full h-32 sm:h-16 lg:h-20 border-b border-gray bg-white transition-all duration-300',
                {
                    '-translate-y-32 sm:-translate-y-16 lg:-translate-y-20': !isSearchOpen,
                    'translate-y-0': isSearchOpen,
                }
            )}
        >
            <div className='flex items-center justify-between w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
                <form className='flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 w-full' onSubmit={handleSubmit}>
                    <Label className='flex items-center'>
                        <Search className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
                        <Input
                            ref={inputRef}
                            name='search'
                            placeholder='Search on Reporter'
                            className='pl-9 lg:pl-10'
                            value={searchValue}
                            onChange={({ target }) => setSearchValue(target.value)}
                        />
                    </Label>

                    <Btn type='submit' btnType={EnumBtn.withIcon} disabled={searchValue.length === 0}>
                        Search
                    </Btn>
                </form>
            </div>
        </div>
    );
};

export default HeaderSearch;

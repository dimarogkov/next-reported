'use client';
import { useState } from 'react';
import { useHeader } from '@/src/store/header';
import { EnumSubscribe, EnumTitle } from '@/src/types/enums';

import SubscribeForm from '../Subscribe/SubscribeForm';
import SubmittedInfo from '../SubmittedInfo';
import { Text, Title } from '../../ui';
import { X } from 'lucide-react';
import cn from 'classnames';

const HeaderSubscribe = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const { isSubscribeOpen, closeMenu } = useHeader((state) => state);

    return (
        <div
            className={cn(
                'fixed z-10 top-[50%] left-[50%] w-[calc(100%-32px)] sm:w-[560px] md:w-[660px] p-6 lg:p-8 rounded-lg border border-gray bg-white transition-all duration-300 -translate-x-[50%]',
                {
                    'opacity-0 invisible -translate-y-[40%]': !isSubscribeOpen,
                    'opacity-100 visible -translate-y-[50%]': isSubscribeOpen,
                }
            )}
        >
            <button
                type='button'
                className='absolute top-2 right-2 outline-0 text-black transition-colors duration-300 hover:text-red'
                onClick={closeMenu}
            >
                <X className='w-7 h-7' />
            </button>

            {!isFormSubmitted ? (
                <>
                    <div className='w-full mb-5 last:mb-0'>
                        <Title titleType={EnumTitle.h3} className='mb-1 sm:mb-2 last:mb-0'>
                            Subscribe Our Newsletter
                        </Title>

                        <Text>
                            Stay updated with the latest news and exclusive content by subscribing to our newsletter.
                        </Text>
                    </div>

                    <SubscribeForm type={EnumSubscribe.full} setIsFormSubmitted={setIsFormSubmitted} />
                </>
            ) : (
                <SubmittedInfo />
            )}
        </div>
    );
};

export default HeaderSubscribe;

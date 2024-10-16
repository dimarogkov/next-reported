import { useHeader } from '@/src/store/header';
import { EnumBtn, EnumTitle } from '@/src/types/enums';

import { Btn, Input, Label, Text, Title } from '../../ui';
import { Mail, X } from 'lucide-react';
import cn from 'classnames';

const HeaderSubscribe = () => {
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

            <div className='w-full mb-5 last:mb-0'>
                <Title titleType={EnumTitle.h3} className='text-red mb-1 sm:mb-2 last:mb-0'>
                    Subscribe Our Newsletter
                </Title>

                <Text>Stay updated with the latest news and exclusive content by subscribing to our newsletter.</Text>
            </div>

            <form className={'flex flex-col gap-3 w-full sm:flex-row sm:gap-2'}>
                <Label className='flex items-center w-full'>
                    <Mail className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
                    <Input name='email' placeholder='Enter your email' className='pl-9 lg:pl-10' />
                </Label>

                <Btn type='submit' btnType={EnumBtn.darkWithIcon}>
                    Subscribe
                </Btn>
            </form>
        </div>
    );
};

export default HeaderSubscribe;

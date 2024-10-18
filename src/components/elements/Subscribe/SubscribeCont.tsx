'use client';
import { useState } from 'react';
import { EnumError, EnumSubmittedInfo, EnumSubscribe, EnumTitle } from '@/src/types/enums';

import SubmittedInfo from '../SubmittedInfo';
import SubscribeForm from './SubscribeForm';
import { Text, Title } from '../../ui';
import cn from 'classnames';

type Props = {
    type?: string;
    className?: string;
};

const SubscribeCont: React.FC<Props> = ({ type = EnumSubscribe.default, className = '' }) => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    return (
        <>
            {!isFormSubmitted ? (
                <>
                    <div
                        className={cn(`w-full text-white ${className}`, {
                            'md:w-[45%] lg:w-[40%] xl:w-[35%]': type === EnumSubscribe.default,
                            'md:w-[45%] lg:w-full lg:mb-5': type === EnumSubscribe.small,
                        })}
                    >
                        <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                            Subscribe Our Newsletter
                        </Title>

                        <Text className={cn({ 'lg:hidden': type === EnumSubscribe.small })}>
                            Stay updated with the latest news and exclusive content by subscribing to our newsletter.
                        </Text>
                    </div>

                    <SubscribeForm type={type} errorType={EnumError.white} setIsFormSubmitted={setIsFormSubmitted} />
                </>
            ) : (
                <SubmittedInfo type={EnumSubmittedInfo.white} />
            )}
        </>
    );
};

export default SubscribeCont;

'use client';
import { useState } from 'react';
import { EnumTitle } from '@/src/types/enums';

import GetInTouchForm from '../GetInTouchForm';
import { Text, Title } from '../../ui';
import SubmittedInfo from '../SubmittedInfo';

const ContactCont = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    return (
        <>
            {!isFormSubmitted ? (
                <div className='w-full'>
                    <div className='w-full mb-5 lg:mb-8 last:mb-0'>
                        <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                            Get in touch
                        </Title>

                        <Text className='w-full sm:max-w-[90%] lg:max-w-[80%]'>
                            Select layout follower boolean editor flows. Scrolling variant move font group variant
                            layout device share.
                        </Text>
                    </div>

                    <GetInTouchForm setIsFormSubmitted={setIsFormSubmitted} />
                </div>
            ) : (
                <SubmittedInfo />
            )}
        </>
    );
};

export default ContactCont;

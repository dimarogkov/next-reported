'use client';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHeader } from '@/src/store/header';
import { subscribeFormOptions } from '@/src/helpers';
import { EnumBtn, EnumError, EnumSubscribe } from '@/src/types/enums';
import { ISubscribeForm } from '@/src/types/interfaces/SubscribeForm';

import { Btn, ErrorMessage, Input, Label } from '../../ui';
import { Mail } from 'lucide-react';
import cn from 'classnames';

type Props = {
    type?: string;
    errorType?: string;
    className?: string;
    setIsFormSubmitted?: Dispatch<SetStateAction<boolean>>;
};

const SubscribeForm: React.FC<Props> = ({
    type = EnumSubscribe.default,
    errorType = EnumError.red,
    className = '',
    setIsFormSubmitted = () => {},
}) => {
    const isSubscribeOpen = useHeader((state) => state.isSubscribeOpen);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm(subscribeFormOptions);

    useEffect(() => {
        !isSubscribeOpen && reset();

        return () => reset();
    }, [isSubscribeOpen, reset]);

    const onSubmit = (data: ISubscribeForm) => {
        setIsFormSubmitted(true);
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(`flex flex-col sm:flex-row gap-3 w-full ${className}`, {
                'lg:flex-col sm:gap-2 lg:gap-3 md:w-[50%] lg:w-full': type === EnumSubscribe.small,
                'sm:gap-2 md:w-[50%] xl:w-[45%]': type === EnumSubscribe.default,
                'sm:gap-2': type === EnumSubscribe.full,
            })}
        >
            <Label className='w-full'>
                <div className='flex items-center w-full mb-2 last:mb-0'>
                    <Mail className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
                    <Input
                        name='email'
                        placeholder='Enter your email'
                        register={register}
                        registerName='email'
                        className='pl-9 lg:pl-10'
                    />
                </div>

                {errors.email && <ErrorMessage errorType={errorType}>{errors.email.message}</ErrorMessage>}
            </Label>

            <Btn
                type='submit'
                btnType={EnumBtn.darkWithIcon}
                className={cn({ 'lg:w-full': type === EnumSubscribe.small })}
            >
                Subscribe
            </Btn>
        </form>
    );
};

export default SubscribeForm;

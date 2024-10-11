'use client';
import { useForm } from 'react-hook-form';
import { contactFormOptions } from '@/src/helpers';
import { EnumBtn, EnumContactForm } from '@/src/types/enums';
import { IContactForm } from '@/src/types/interfaces/ContactForm';

import { Area, Btn, ErrorMessage, Input, Label } from '../ui';

const GetInTouchForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(contactFormOptions);

    const onSubmit = (data: IContactForm) => console.log(data);

    return (
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid lg:grid-cols-2 gap-4 lg:gap-5 w-full mb-5 last:mb-0'>
                <Label className='w-full'>
                    <Input
                        placeholder='Name'
                        register={register}
                        registerName={EnumContactForm.name}
                        className='mb-2 last:mb-0'
                    />

                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </Label>

                <Label className='w-full'>
                    <Input
                        placeholder='Last Name'
                        register={register}
                        registerName={EnumContactForm.lastName}
                        className='mb-2 last:mb-0'
                    />

                    {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                </Label>

                <Label className='w-full'>
                    <Input
                        type='email'
                        placeholder='Email'
                        register={register}
                        registerName={EnumContactForm.email}
                        className='mb-2 last:mb-0'
                    />

                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </Label>

                <Label className='w-full'>
                    <Input
                        placeholder='Phone'
                        register={register}
                        registerName={EnumContactForm.phone}
                        className='mb-2 last:mb-0'
                    />

                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                </Label>

                <Area placeholder='Type Your Message' className='lg:col-span-2'></Area>
            </div>

            <Btn type='submit' btnType={EnumBtn.withIcon}>
                Send
            </Btn>
        </form>
    );
};

export default GetInTouchForm;

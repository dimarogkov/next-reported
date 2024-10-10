import { Metadata } from 'next';
import { Banner, Breadcrumbs, ContactForm, ContactInfo, Subscribe } from '@/src/components/blocks';

export const metadata: Metadata = {
    title: 'Contact Page',
};

const ContactPage = () => {
    return (
        <>
            <Breadcrumbs className='my-6 xl:my-8' />

            <Banner title='Contact Us' className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-6 sm:mt-0' />

            <ContactInfo className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            {/* <ContactForm className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' /> */}

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default ContactPage;

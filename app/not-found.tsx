import { Metadata } from 'next';
import { EnumBtn } from '@/src/types/enums';
import { BtnLink, Title } from '@/src/components/ui';

export const metadata: Metadata = {
    title: '404',
};

const NotFoundPage = () => {
    return (
        <section className='relative w-full'>
            <Title className='mb-5 last:mb-0'>Page not Found | 404</Title>
            <BtnLink href='/' btnType={EnumBtn.withIcon}>
                Go Home
            </BtnLink>
        </section>
    );
};

export default NotFoundPage;

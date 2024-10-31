import { Metadata } from 'next';
import { CONTENT_INFO } from '@/src/variables/content-info';
import { EnumContentInfo } from '@/src/types/enums';

import { Banner, Breadcrumbs, Categories, ContentInfo, Subscribe, TopAuthors, WhoWeAre } from '@/src/components/blocks';
import { ContentInfoText } from '@/src/components/elements/ContentInfo';

export const metadata: Metadata = {
    title: 'About Us Page',
};

const AboutUsPage = () => {
    return (
        <>
            <Breadcrumbs className='my-6 xl:my-8' />

            <Banner
                title='About Us'
                text='Learn more about our mission, values, and commitment to excellence. Together, we aim to make a difference in every community we serve!'
                className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-6 sm:mt-0'
            />

            <ContentInfo
                img='/content_info_1.jpg'
                content={<ContentInfoText data={CONTENT_INFO[0]} />}
                className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24'
            />

            <WhoWeAre className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <ContentInfo
                type={EnumContentInfo.imgLeft}
                img='/content_info_2.jpg'
                content={<ContentInfoText data={CONTENT_INFO[1]} />}
                className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24'
            />

            <TopAuthors className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Categories className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />

            <Subscribe className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default AboutUsPage;

import Image from 'next/image';
import { EnumContentInfo, EnumTitle } from '@/src/types/enums';

import { ContentInfoImgSkeleton } from '../elements/ContentInfo';
import { Text, Title } from '../ui';
import cn from 'classnames';

type Props = {
    type?: string;
    img?: string;
    content?: JSX.Element;
    className?: string;
};

const ContentInfo: React.FC<Props> = ({ type = EnumContentInfo.imgRight, img, content, className = '' }) => {
    return (
        <section className={`relative grid md:grid-cols-2 items-center gap-5 md:gap-8 lg:gap-10 w-full ${className}`}>
            {!content ? (
                <div
                    className={cn('w-full order-1', {
                        'md:order-none': type === EnumContentInfo.imgRight,
                    })}
                >
                    <Title titleType={EnumTitle.h2} className='w-full mb-2 md:mb-3 last:mb-0'>
                        Lorem ipsum dolor
                    </Title>

                    <Text className='w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut quos ullam beatae sed velit,
                        nisi ratione exercitationem in eos dicta qui delectus quam, deleniti unde, magnam eum quo
                        doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut quos ullam beatae
                        sed velit, nisi ratione exercitationem in eos dicta qui delectus quam, deleniti unde, magnam eum
                        quo doloremque?
                    </Text>
                </div>
            ) : (
                <div
                    className={cn('w-full order-1', {
                        'md:order-none': type === EnumContentInfo.imgRight,
                    })}
                >
                    {content}
                </div>
            )}

            {!img && <ContentInfoImgSkeleton />}

            {img && (
                <ContentInfoImgSkeleton>
                    <Image
                        src={img}
                        alt={img}
                        className='absolute top-0 left-0 w-full h-full object-cover object-center'
                        sizes='100%'
                        priority
                        fill
                    />
                </ContentInfoImgSkeleton>
            )}
        </section>
    );
};

export default ContentInfo;

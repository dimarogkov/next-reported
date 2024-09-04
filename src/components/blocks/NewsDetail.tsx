import Image from 'next/image';
import { capitalizeFirstLetter } from '@/src/helpers/capitalizeFirstLetter';
import { EnumAuthorInfo, EnumText } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import { AuthorInfo } from '../elements/Author';
import { DateInfo } from '../elements';
import { Badge, Text, Title } from '../ui';

type Props = {
    news: INews;
    className?: string;
};

const NewsDetail: React.FC<Props> = ({ news, className = '' }) => {
    const { title, category, summary, text, image, authors, publish_date } = news;
    const categoryName = capitalizeFirstLetter(category);

    return (
        <section className={`relative w-full ${className}`}>
            <div className='relative flex items-end w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] p-4 md:p-5 lg:p-8 xl:p-10 rounded-lg overflow-hidden mb-10 last:mb-0'>
                <Image
                    src={image}
                    alt={title}
                    className='absolute top-0 left-0 w-full h-full object-cover object-center brightness-50'
                    fill
                />

                <div className='w-full'>
                    <div className='relative w-full pb-5 border-b border-white/95 mb-5 last:mb-0'>
                        <div className='flex mb-3 md:mb-4 last:mb-0'>
                            <Badge>{categoryName}</Badge>
                        </div>

                        <Title className='line-clamp-3 sm:line-clamp-2 text-white/95'>{title}</Title>
                    </div>

                    <div className='flex items-center justify-between gap-4 sm:gap-0 w-full'>
                        <AuthorInfo type={EnumAuthorInfo.light} authors={authors} />
                        <DateInfo date={publish_date} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5 w-full'>
                <Text textSize={EnumText.large}>{summary}</Text>
                <Text textSize={EnumText.large}>{text}</Text>
                <Text textSize={EnumText.large}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptate quas molestias, tenetur
                    maxime corrupti, quod harum quibusdam voluptatibus perferendis temporibus itaque ea? Esse eos, nobis
                    veritatis non facere repudiandae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
                    voluptate quas molestias, tenetur maxime corrupti, quod harum quibusdam voluptatibus perferendis
                    temporibus itaque ea? Esse eos, nobis veritatis non facere repudiandae.
                </Text>
            </div>
        </section>
    );
};

export default NewsDetail;

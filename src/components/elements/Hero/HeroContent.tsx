'use client';
import { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '@/src/helpers/capitalizeFirstLetter';
import { EnumBtn } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import HeroSkeleton from './HeroSkeleton';
import { Badge, BtnLink, Text, Title } from '../../ui';

type Props = {
    news: INews;
};

const HeroContent: React.FC<Props> = ({ news }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        news ? setIsLoading(false) : setIsLoading(true);
    }, [news]);

    const categoryName = capitalizeFirstLetter(news.category);

    return (
        <div className='w-full'>
            {!isLoading ? (
                <>
                    <div className='flex mb-3 md:mb-4 last:mb-0'>
                        <Badge>{categoryName}</Badge>
                    </div>

                    <Title className='sm:line-clamp-3 mb-3 last:mb-0'>{news.title}</Title>
                    <Text className='sm:line-clamp-5 mb-4 md:mb-5 last:mb-0'>{news.summary}</Text>

                    <BtnLink href={`/${news.category}/${news.id}`} btnType={EnumBtn.withIcon}>
                        More
                    </BtnLink>
                </>
            ) : (
                <HeroSkeleton />
            )}
        </div>
    );
};

export default HeroContent;

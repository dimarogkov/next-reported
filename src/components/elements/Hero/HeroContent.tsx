import { EnumBtn } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';
import { capitalizeFirstLetter } from '@/src/helpers/capitalizeFirstLetter';

import HeroSkeleton from './HeroSkeleton';
import { Badge, BtnLink, Text, Title } from '../../ui';

type Props = {
    news: INews | undefined;
    className?: string;
};

const HeroContent: React.FC<Props> = ({ news, className = '' }) => {
    const categoryName = capitalizeFirstLetter(news?.category);

    return (
        <div className={`w-full ${className}`}>
            {news ? (
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

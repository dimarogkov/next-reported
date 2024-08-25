import { EnumBtn } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';
import HeroSkeleton from './HeroSkeleton';
import { Badge, BtnLink, Text, Title } from '../../ui';

type Props = {
    news: INews | undefined;
    className?: string;
};

const HeroContent: React.FC<Props> = ({ news, className = '' }) => {
    return (
        <div className={`w-full ${className}`}>
            {news ? (
                <>
                    <div className='flex mb-3 md:mb-4 last:mb-0'>
                        <Badge>{`${news.category.charAt(0).toUpperCase()}${news.category.slice(1)}`}</Badge>
                    </div>

                    <Title className='mb-3 last:mb-0'>{news.title}</Title>
                    <Text className='mb-4 md:mb-5 last:mb-0'>{news.summary}</Text>

                    <BtnLink href={`/news/${news.id}`} btnType={EnumBtn.withIcon}>
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

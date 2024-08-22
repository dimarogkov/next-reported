import { EnumBtn } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';
import { Badge, BtnLink, Skeleton, Text, Title } from '../../ui';

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
                        <Badge>{`${news.catgory.charAt(0).toUpperCase()}${news.catgory.slice(1)}`}</Badge>
                    </div>

                    <Title className='mb-3 last:mb-0'>{news.title}</Title>
                    <Text className='mb-4 md:mb-5 last:mb-0'>{news.summary}</Text>

                    <BtnLink href={`/news/${news.id}`} btnType={EnumBtn.withIcon}>
                        More
                    </BtnLink>
                </>
            ) : (
                <>
                    <div className='relative w-20 h-7 md:h-8 mb-3 last:mb-0'>
                        <Skeleton />
                    </div>
                    <div className='relative w-[75%] md:w-[65%] h-10 xl:h-12 mb-3 last:mb-0'>
                        <Skeleton />
                    </div>
                    <div className='relative w-full h-20 md:h-24 mb-3 last:mb-0'>
                        <Skeleton />
                    </div>
                    <div className='relative w-32 h-10 lg:h-11'>
                        <Skeleton />
                    </div>
                </>
            )}
        </div>
    );
};

export default HeroContent;

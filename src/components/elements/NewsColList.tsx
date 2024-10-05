import { EnumBtn, EnumCard } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import { NewsCard } from './NewsCard';
import { BtnLink } from '../ui';
import cn from 'classnames';

type Props = {
    title: string;
    category: string;
    newsArr: INews[];
};

const NewsColList: React.FC<Props> = ({ title, category, newsArr }) => {
    return (
        <div className='flex flex-col flex-grow w-full'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-1 flex-grow gap-6 sm:gap-4 xl:gap-5 w-full mb-5 last:mb-0'>
                {newsArr.map((news, index) => (
                    <NewsCard
                        news={news}
                        cardType={index === 0 ? EnumCard.default : EnumCard.small}
                        key={crypto.randomUUID()}
                        className={cn({ 'flex-grow': index === 0 })}
                    />
                ))}
            </div>

            <BtnLink href={`/${category}`} btnType={EnumBtn.withIcon} className='sm:w-full'>
                Go to {title}
            </BtnLink>
        </div>
    );
};

export default NewsColList;

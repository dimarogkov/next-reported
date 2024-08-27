import { getNewsByCategory } from '@/src/services/news';
import NewsColList from '../elements/NewsColList';
import { Subtitle } from '../ui';

type Props = {
    title: string;
    category: string;
};

const NewsCol: React.FC<Props> = async ({ title, category }) => {
    const newsArr = await getNewsByCategory(category).then((data) => data.slice(0, 4));

    return (
        <div className='relative flex flex-col w-full'>
            {title && <Subtitle className='pb-2 border-b-2 border-black mb-4 xl:mb-5 last:mb-0'>{title}</Subtitle>}

            <NewsColList title={title} category={category} newsArr={newsArr} />
        </div>
    );
};

export default NewsCol;

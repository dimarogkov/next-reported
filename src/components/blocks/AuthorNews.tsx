import { EnumCard } from '@/src/types/enums';
import { INews } from '@/src/types/interfaces/News';

import { NewsCard } from '../elements/NewsCard';
import { Subtitle } from '../ui';

type Props = {
    author: string;
    newsArr: INews[];
    className?: string;
};

const AuthorNews: React.FC<Props> = ({ author, newsArr, className = '' }) => {
    return (
        <section className={`relative w-full ${className}`}>
            <div className='w-full pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-b-2 border-black mb-6 sm:mb-8 lg:mb-10 last:mb-0'>
                <Subtitle>News by {author}</Subtitle>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full mb-10 sm:mb-12 lg:mb-0 last:mb-0'>
                {newsArr.map((news) => (
                    <NewsCard news={news} cardType={EnumCard.large} key={news.id} />
                ))}
            </div>
        </section>
    );
};

export default AuthorNews;

import { getNewsByCategory } from '@/src/services/news';
import { EnumCategoriesNews } from '@/src/types/enums';
import { HeroContent, HeroImg } from '../elements/Hero';

type Props = {
    className?: string;
};

const Hero: React.FC<Props> = async ({ className = '' }) => {
    const news = await getNewsByCategory(EnumCategoriesNews.politics).then((data) => data[1]);

    return (
        <section
            className={`relative flex-col-reverse lg:flex-row flex items-center gap-5 md:gap-8 lg:gap-10 w-full ${className}`}
        >
            <HeroContent news={news} />
            <HeroImg src={news.image} alt={news.title} />
        </section>
    );
};

export default Hero;

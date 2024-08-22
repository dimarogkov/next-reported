'use client';
import { useQuery } from '@tanstack/react-query';
import { getHeroNews } from '@/src/services/news';
import { HeroContent, HeroImg } from '../elements/Hero';

type Props = {
    className?: string;
};

const Hero: React.FC<Props> = ({ className = '' }) => {
    const { data: news, isLoading } = useQuery({
        queryFn: () => getHeroNews(),
        select: (data) => data.data.news[0],
        queryKey: ['hero news'],
        refetchOnWindowFocus: false,
    });

    return (
        <section
            className={`relative flex-col-reverse md:flex-row flex items-center gap-5 md:gap-8 lg:gap-10 w-full ${className}`}
        >
            <HeroContent news={news} />
            <HeroImg src={news?.image} alt={news?.title} isLoading={isLoading} />
        </section>
    );
};

export default Hero;

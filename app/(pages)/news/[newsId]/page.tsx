import { Metadata } from 'next';

type Props = {
    params: {
        newsId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    // const data = await getNewsById(params.newsId);

    return {
        title: params.newsId,
    };
};

const NewsDetailPage: React.FC<Props> = ({ params }) => {
    return (
        <section className='relative w-full'>
            <div>News ID - {params.newsId}</div>
        </section>
    );
};

export default NewsDetailPage;

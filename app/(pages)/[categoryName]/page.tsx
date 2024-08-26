import { Metadata } from 'next';
import { capitalizeFirstLetter } from '@/src/helpers/capitalizeFirstLetter';

type Props = {
    params: {
        categoryName: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const categoryName = capitalizeFirstLetter(params.categoryName);

    return {
        title: `${categoryName} Page`,
    };
};

const NewsDetailPage: React.FC<Props> = ({ params }) => {
    return (
        <section className='relative w-full'>
            <div>Category Name - {params.categoryName}</div>
        </section>
    );
};

export default NewsDetailPage;

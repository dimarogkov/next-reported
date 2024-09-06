import { Metadata } from 'next';
import { capitalizeFirstLetter } from '@/src/helpers';
import { Breadcrumbs, CategoryNews, CtyBanner } from '@/src/components/blocks';

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

const CategoryPage: React.FC<Props> = ({ params }) => {
    return (
        <>
            <Breadcrumbs className='my-6 xl:my-8' />

            <CategoryNews category={params.categoryName} className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24 mt-8 sm:mt-0' />

            <CtyBanner className='mb-10 sm:mb-12 lg:mb-20 xl:mb-24' />
        </>
    );
};

export default CategoryPage;

import { menu } from '@/src/variables/menu';
import { Subtitle } from '../ui';
import { CategoriesCard } from '../elements';

type Props = {
    className?: string;
};

const Categories: React.FC<Props> = ({ className = '' }) => {
    const { deskMenu } = menu;

    return (
        <section className={`relative w-full ${className}`}>
            <Subtitle className='mb-4 sm:mb-5 lg:mb-6 last:mb-0'>Explore by Categories</Subtitle>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 xl:gap-5 w-full'>
                {deskMenu.map((category) => (
                    <CategoriesCard category={category} key={category.id} />
                ))}
            </div>
        </section>
    );
};

export default Categories;

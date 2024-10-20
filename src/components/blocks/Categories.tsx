import { EnumTitle } from '@/src/types/enums';
import { MENU } from '@/src/variables/menu';

import { CategoriesCard } from '../elements';
import { Title } from '../ui';

type Props = {
    className?: string;
};

const Categories: React.FC<Props> = ({ className = '' }) => {
    const { deskMenu } = MENU;

    return (
        <section className={`relative w-full ${className}`}>
            <Title titleType={EnumTitle.h2} className='mb-4 sm:mb-5 lg:mb-7 last:mb-0'>
                Explore by Categories
            </Title>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 xl:gap-5 w-full'>
                {deskMenu.map((category) => (
                    <CategoriesCard category={category} key={category.id} />
                ))}
            </div>
        </section>
    );
};

export default Categories;

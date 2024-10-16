import Link from 'next/link';
import { IMenuItem } from '@/src/types/interfaces/MenuItem';

type Props = {
    category: IMenuItem;
};

const CategoriesCard: React.FC<Props> = ({ category }) => {
    const { href, name, icon: CategoryIcon } = category;

    return (
        <Link
            href={href}
            className='relative flex items-center justify-center gap-3 w-full p-4 xl:p-5 rounded bg-gray transition-colors duration-300 group hover:bg-red'
        >
            <CategoryIcon className='w-7 sm:w-8 h-7 sm:h-8 stroke-1 text-black transition-colors duration-300 group-hover:text-white' />

            <span className='text-base md:text-lg text-black transition-colors duration-300 group-hover:text-white'>
                {name}
            </span>
        </Link>
    );
};

export default CategoriesCard;

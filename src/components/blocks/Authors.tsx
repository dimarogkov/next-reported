import { getAuthors } from '@/src/services/authors';
import { AuthorList, AuthorSearch } from '../elements/Author';
import { Title } from '../ui';

type Props = {
    className?: string;
};

const Authors: React.FC<Props> = async ({ className = '' }) => {
    const authors = await getAuthors();

    return (
        <section className={`relative w-full ${className}`}>
            <div className='flex flex-wrap items-center justify-between w-full pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-b-2 border-black mb-6 sm:mb-8 lg:mb-10 last:mb-0'>
                <Title className='sm:w-auto mb-2 sm:mb-0 last:mb-0'>All Authors</Title>
                <AuthorSearch />
            </div>

            <AuthorList authors={authors} />
        </section>
    );
};

export default Authors;

import { getAuthors } from '@/src/services/authors';
import { AuthorCard } from '../elements';
import { Title } from '../ui';

type Props = {
    className?: string;
};

const Authors: React.FC<Props> = async ({ className = '' }) => {
    const authors = await getAuthors();

    return (
        <section className={`relative w-full ${className}`}>
            <div className='w-full pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-b-2 border-black mb-6 sm:mb-8 lg:mb-10 last:mb-0'>
                <Title>All Authors</Title>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 xl:gap-8 w-full'>
                {authors.map((author) => (
                    <AuthorCard author={author} key={author.id} />
                ))}
            </div>
        </section>
    );
};

export default Authors;

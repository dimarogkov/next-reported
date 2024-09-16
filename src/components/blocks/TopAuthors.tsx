import { getTopAuthors } from '@/src/services/authors';
import { BtnLink, Subtitle } from '../ui';
import { TopAuthorCard } from '../elements';
import { EnumBtn } from '@/src/types/enums';

type Props = {
    className?: string;
};

const TopAuthors: React.FC<Props> = async ({ className = '' }) => {
    const authors = await getTopAuthors(12);

    return (
        <section className={`relative w-full ${className}`}>
            <div className='flex items-center justify-between w-full pb-2 border-b-2 border-black mb-8 last:mb-0'>
                <Subtitle className='block sm:max-w-[60%]'>Top Authors</Subtitle>

                <BtnLink href={`/authors`} btnType={EnumBtn.darkWithIcon} className='hidden sm:flex'>
                    Go to Authors
                </BtnLink>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 xl:gap-8 w-full'>
                {authors.map((author) => (
                    <TopAuthorCard author={author} key={author.id} />
                ))}
            </div>
        </section>
    );
};

export default TopAuthors;

import { getTopAuthors } from '@/src/services/authors';
import { EnumBtn, EnumTitle } from '@/src/types/enums';

import { AuthorCard } from '../elements/Author';
import { BtnLink, Title } from '../ui';
import { Suspense } from 'react';

type Props = {
    className?: string;
};

const TopAuthors: React.FC<Props> = async ({ className = '' }) => {
    const authors = await getTopAuthors(12);

    return (
        <Suspense>
            <section className={`relative w-full ${className}`}>
                <div className='flex items-center justify-between w-full pb-2 sm:pb-3 border-b-2 border-black mb-10 last:mb-0'>
                    <Title titleType={EnumTitle.h2} className='block sm:max-w-[60%]'>
                        Top Authors
                    </Title>

                    <BtnLink href={`/authors`} btnType={EnumBtn.darkWithIcon} className='hidden sm:flex'>
                        Go to Authors
                    </BtnLink>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 xl:gap-8 w-full'>
                    {authors.map((author) => (
                        <AuthorCard author={author} key={author.id} />
                    ))}
                </div>
            </section>
        </Suspense>
    );
};

export default TopAuthors;

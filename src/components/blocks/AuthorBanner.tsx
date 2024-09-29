import { IAuthor } from '@/src/types/interfaces/Author';
import { EnumAuthorInfo } from '@/src/types/enums';

import { AuthorAvatar } from '../elements/Author';
import { Subtitle, Text, Title } from '../ui';

type Props = {
    author: IAuthor;
    className?: string;
};

const AuthorBanner: React.FC<Props> = ({ author, className = '' }) => {
    const { name, email, position, location, news } = author;

    return (
        <section
            className={`relative w-full text-center px-5 md:px-10 py-8 md:py-12 lg:py-16 rounded-md bg-gray mt-10 sm:mt-0 ${className}`}
        >
            <AuthorAvatar type={EnumAuthorInfo.dark} author={name} className='pointer-events-none mb-5 last:mb-0' />

            <Subtitle className='mb-3 last:mb-0'>{name}</Subtitle>

            <div className='flex flex-col gap-2 w-full'>
                <Text>
                    <span className='font-semibold'>Position</span>: <span className='italic'>{position}</span>
                </Text>
                <Text>
                    <span className='font-semibold'>Email</span>: <span className='italic'>{email}</span>
                </Text>
                <Text>
                    <span className='font-semibold'>Location</span>: <span className='italic'>{location}</span>
                </Text>
                <Text>
                    <span className='font-semibold'>Published News</span>: <span className='italic'>{news.length}</span>
                </Text>
            </div>
        </section>
    );
};

export default AuthorBanner;

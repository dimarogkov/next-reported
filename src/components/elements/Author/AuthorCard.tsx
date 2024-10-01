import Link from 'next/link';
import { EnumAuthorInfo, EnumText } from '@/src/types/enums';
import { IAuthor } from '@/src/types/interfaces/Author';

import { AuthorAvatar } from '.';
import { Text } from '../../ui';

type Props = {
    author: IAuthor;
};

const AuthorCard: React.FC<Props> = ({ author }) => {
    const { name, position } = author;

    return (
        <div className='relative w-full'>
            <div className='w-11 h-11 rounded-full overflow-hidden m-auto mb-3 last:mb-0'>
                <AuthorAvatar type={EnumAuthorInfo.dark} author={name} />
            </div>

            <div className='w-full text-center'>
                <Text textSize={EnumText.large} className='text-red line-clamp-1 hover:underline'>
                    <Link href={`/authors/${name}`}>{name}</Link>
                </Text>

                <Text textSize={EnumText.small} className='line-clamp-1'>
                    {position}
                </Text>
            </div>
        </div>
    );
};

export default AuthorCard;

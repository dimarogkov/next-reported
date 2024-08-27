import Link from 'next/link';
import AuthorAvatar from './AuthorAvatar';
import { EnumText } from '@/src/types/enums';
import { Text } from '../../ui';

type Props = {
    authors: string[];
};

const AuthorInfo: React.FC<Props> = ({ authors }) => {
    return (
        <div className='relative flex sm:max-w-[60%] items-center gap-2'>
            <div className='avatar-group -space-x-5 rtl:space-x-reverse'>
                {authors.slice(0, 3).map((author) => (
                    <AuthorAvatar author={author} key={author} />
                ))}

                {authors.length > 3 && (
                    <div className='avatar w-11 h-11 placeholder'>
                        <div className='text-sm text-white bg-black'>
                            <span>+{authors.slice(3).length}</span>
                        </div>
                    </div>
                )}
            </div>

            <Text textSize={EnumText.small} className='hidden sm:block flex-grow basis-0 truncate'>
                <span>By </span>
                {authors.map((author, index) =>
                    index !== authors.length - 1 ? (
                        <span key={author}>
                            <Link href={author} className='text-red hover:underline'>
                                {author}
                            </Link>
                            {`, `}
                        </span>
                    ) : (
                        <span key={author}>
                            <Link href={author} className='text-red hover:underline'>
                                {author}
                            </Link>
                        </span>
                    )
                )}
            </Text>
        </div>
    );
};

export default AuthorInfo;

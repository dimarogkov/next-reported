import Link from 'next/link';
import AuthorAvatar from './AuthorAvatar';
import { EnumAuthorInfo, EnumText } from '@/src/types/enums';

import { Text } from '../../ui';
import cn from 'classnames';

type Props = {
    type?: string;
    authors: string[];
};

const AuthorInfo: React.FC<Props> = ({ type = EnumAuthorInfo.dark, authors }) => {
    return (
        <div className='relative flex sm:max-w-[60%] items-center gap-2'>
            <div className='avatar-group -space-x-5 rtl:space-x-reverse'>
                {authors.slice(0, 3).map((author) => (
                    <AuthorAvatar type={type} author={author} key={author} />
                ))}

                {authors.length > 3 && (
                    <div
                        className={cn('avatar placeholder', {
                            'w-10 h-10 border-0': type === EnumAuthorInfo.light,
                            'w-11 h-11': type === EnumAuthorInfo.dark,
                        })}
                    >
                        <div
                            className={cn('text-sm', {
                                'text-white bg-black': type === EnumAuthorInfo.dark,
                                'text-black bg-gray': type === EnumAuthorInfo.light,
                            })}
                        >
                            <span>+{authors.slice(3).length}</span>
                        </div>
                    </div>
                )}
            </div>

            <Text
                textSize={EnumText.small}
                className={cn('hidden sm:block flex-grow basis-0 truncate', {
                    'text-black ': type === EnumAuthorInfo.dark,
                    'text-gray ': type === EnumAuthorInfo.light,
                })}
            >
                <span>By </span>
                {authors.map((author, index) =>
                    index !== authors.length - 1 ? (
                        <span key={author}>
                            <Link
                                href={`authors/${author}`}
                                className={cn('hover:underline', {
                                    'text-red ': type === EnumAuthorInfo.dark,
                                    'text-gray ': type === EnumAuthorInfo.light,
                                })}
                            >
                                {author}
                            </Link>
                            {`, `}
                        </span>
                    ) : (
                        <span key={author}>
                            <Link
                                href={`authors/${author}`}
                                className={cn('hover:underline', {
                                    'text-red ': type === EnumAuthorInfo.dark,
                                    'text-gray ': type === EnumAuthorInfo.light,
                                })}
                            >
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

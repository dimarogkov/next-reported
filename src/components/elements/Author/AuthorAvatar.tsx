'use client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getAvatar } from '@/src/services/avatar';
import { EnumAuthorInfo } from '@/src/types/enums';
import { PATHS } from '@/src/variables/paths';

import { Skeleton } from '../../ui';
import cn from 'classnames';

type Props = {
    type: string;
    author: string;
    className?: string;
};

const AuthorAvatar: React.FC<Props> = ({ type, author, className = '' }) => {
    const { data: avatar, isLoading } = useQuery({
        queryFn: () => getAvatar(author),
        select: (data) => data.data,
        queryKey: ['avatar', author],
        refetchOnWindowFocus: false,
    });

    return (
        <div
            className={cn(`avatar placeholder ${className}`, {
                'w-10 h-10 border-2': type === EnumAuthorInfo.light,
                'w-11 h-11': type === EnumAuthorInfo.dark,
            })}
        >
            <div className='w-full'>
                {isLoading && <Skeleton />}

                {avatar && (
                    <Link
                        href={`${PATHS.AUTHORS}/${author}`}
                        dangerouslySetInnerHTML={{ __html: avatar }}
                        className='absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform transition-all duration-300 hover:scale-110 hover:brightness-90'
                    />
                )}
            </div>
        </div>
    );
};

export default AuthorAvatar;

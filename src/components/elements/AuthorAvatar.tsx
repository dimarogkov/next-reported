import Link from 'next/link';
import { getAvatar } from '@/src/services/avatar';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '../ui';

type Props = {
    author: string;
};

const AuthorAvatar: React.FC<Props> = ({ author }) => {
    const { data: avatar, isLoading } = useQuery({
        queryFn: () => getAvatar(author),
        select: (data) => data.data,
        queryKey: ['avatar', author],
        refetchOnWindowFocus: false,
    });

    return (
        <div className='avatar w-11 h-11'>
            <div className='w-full'>
                {isLoading && <Skeleton />}

                {avatar && (
                    <Link
                        href={author}
                        dangerouslySetInnerHTML={{ __html: avatar }}
                        className='absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform transition-all duration-300 hover:scale-110 hover:brightness-90'
                    />
                )}
            </div>
        </div>
    );
};

export default AuthorAvatar;

import Link from 'next/link';
import { EnumCard, EnumSubtitle, EnumText } from '@/src/types/enums';

import DateInfo from '../DateInfo';
import { Subtitle, Text } from '../../ui';
import cn from 'classnames';

type Props = {
    type: string;
    href: string;
    title: string;
    summary: string;
    date: string;
    className?: string;
};

const NewsCardContent: React.FC<Props> = ({ type, href, title, summary, date, className = '' }) => {
    return (
        <div
            className={cn(`w-full ${className}`, {
                'flex-grow': type === EnumCard.large,
            })}
        >
            {(type === EnumCard.default || type === EnumCard.small) && (
                <>
                    <DateInfo date={date} className='z-10 mb-2 last:mb-0' />

                    <Text className='font-medium sm:line-clamp-2'>
                        <Link href={href} className='block-link group-hover:underline'>
                            {title}
                        </Link>
                    </Text>
                </>
            )}

            {type === EnumCard.large && (
                <>
                    <Subtitle subType={EnumSubtitle.h3} className='sm:line-clamp-2 mb-3 last:mb-0'>
                        <Link href={href} className='block-link group-hover:underline'>
                            {title}
                        </Link>
                    </Subtitle>

                    <Text textSize={EnumText.large} className='sm:line-clamp-3'>
                        {summary}
                    </Text>
                </>
            )}
        </div>
    );
};

export default NewsCardContent;

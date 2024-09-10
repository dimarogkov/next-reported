import Link from 'next/link';
import { EnumText } from '@/src/types/enums/Text';
import { CalendarDays } from 'lucide-react';
import { Text } from '../ui';

type Props = {
    date: string;
    className?: string;
};

const DateInfo: React.FC<Props> = ({ date, className = '' }) => {
    return (
        <Link
            href={`search?publish_date=${date}`}
            className={`relative flex items-center gap-2 w-fit rounded px-2.5 py-1.5 bg-gray transition-all duration-300 hover:brightness-90 ${className}`}
        >
            <CalendarDays className='w-5 h-5 text-black' />
            <Text textSize={EnumText.small}>{date}</Text>
        </Link>
    );
};

export default DateInfo;

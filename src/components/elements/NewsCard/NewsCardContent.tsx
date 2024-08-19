import { EnumCard, EnumText } from '@/src/types/enums';
import DateInfo from '../DateInfo';
import { Subtitle, Text } from '../../ui';

type Props = {
    type: string;
    title: string;
    summary: string;
    date: string;
    className?: string;
};

const NewsCardContent: React.FC<Props> = ({ type, title, summary, date, className = '' }) => {
    return (
        <div className={`w-full ${className}`}>
            {type === EnumCard.default && (
                <>
                    <DateInfo date={date} className='mb-3 last:mb-0' />

                    <Text textSize={EnumText.large} className='font-medium group-hover:underline'>
                        {title}
                    </Text>
                </>
            )}

            {type === EnumCard.large && (
                <>
                    <Subtitle className=' group-hover:underline mb-4 last:mb-0'>{title}</Subtitle>
                    <Text textSize={EnumText.large}>{summary}</Text>
                </>
            )}

            {type === EnumCard.small && <Text className='font-medium group-hover:underline'>{title}</Text>}
        </div>
    );
};

export default NewsCardContent;

import { EnumTitle } from '@/src/types/enums';
import { IContentInfo } from '@/src/types/interfaces/ContentInfo';
import { Text, Title } from '../../ui';

type Props = {
    data: IContentInfo;
};

const ContentInfoText: React.FC<Props> = ({ data }) => {
    const { title, content } = data;

    return (
        <div className='relative w-full'>
            <Title titleType={EnumTitle.h2} className='w-full mb-2 sm:mb-3 lg:mb-4 last:mb-0'>
                {title}
            </Title>

            <div className='grid gap-2.5 md:gap-3.5 w-full'>
                {content.map(({ id, text }) => (
                    <Text key={id}>{text}</Text>
                ))}
            </div>
        </div>
    );
};

export default ContentInfoText;

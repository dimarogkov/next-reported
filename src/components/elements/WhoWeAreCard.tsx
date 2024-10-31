import { EnumTitle } from '@/src/types/enums';
import { IWhoWeAre } from '@/src/types/interfaces/WhoWeAre';
import { Text, Title } from '../ui';

type Props = {
    data: IWhoWeAre;
};

const WhoWeAreCard: React.FC<Props> = ({ data }) => {
    const { title, text } = data;

    return (
        <div className='relative w-full'>
            <Title titleType={EnumTitle.h3} className='mb-1.5 last:mb-0'>
                {title}
            </Title>

            <Text>{text}</Text>
        </div>
    );
};

export default WhoWeAreCard;

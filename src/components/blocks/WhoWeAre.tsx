import { WHO_WE_ARE } from '@/src/variables/who-we-are';
import { EnumTitle } from '@/src/types/enums';

import { WhoWeAreCard } from '../elements';
import { Title } from '../ui';

type Props = {
    className?: string;
};

const WhoWeAre: React.FC<Props> = ({ className = '' }) => {
    const data = WHO_WE_ARE;

    return (
        <section className={`relative w-full ${className}`}>
            <Title
                titleType={EnumTitle.h2}
                className='w-full pb-2 sm:pb-3 border-b-2 border-black mb-4 sm:mb-6 md:mb-7 last:mb-0'
            >
                Who We Are
            </Title>

            <div className='grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full'>
                {data.map((item) => (
                    <WhoWeAreCard data={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default WhoWeAre;

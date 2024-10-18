import { EnumSubscribe } from '@/src/types/enums';
import { SubscribeCont } from '../elements/Subscribe';
import cn from 'classnames';

type Props = {
    type?: string;
    className?: string;
};

const Subscribe: React.FC<Props> = ({ type = EnumSubscribe.default, className = '' }) => {
    return (
        <section
            className={cn(
                `relative flex-wrap items-center justify-between w-full rounded-md p-4 sm:p-5 md:p-8 bg-red ${className}`,
                {
                    'flex lg:p-12 xl:p-16': type === EnumSubscribe.default,
                    'flex lg:block lg:p-5': type === EnumSubscribe.small,
                }
            )}
        >
            <SubscribeCont type={type} className='mb-5 md:mb-0 last:mb-0' />
        </section>
    );
};

export default Subscribe;

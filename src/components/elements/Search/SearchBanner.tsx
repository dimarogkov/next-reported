import { capitalizeFirstLetter } from '@/src/helpers';
import { Text, Title } from '../../ui';

type Props = {
    query: string;
    queryValue: string;
    className?: string;
};

const SearchBanner: React.FC<Props> = ({ query, queryValue, className = '' }) => {
    const fixedQuery = query
        .replaceAll('_', ' ')
        .split(' ')
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');

    return (
        <div
            className={`relative w-full text-center px-5 md:px-10 py-8 md:py-12 lg:py-16 rounded-md bg-gray mt-10 sm:mt-0 ${className}`}
        >
            <Title className='mb-2 md:mb-3 lg:mb-5 last:mb-0'>Search</Title>

            <Text>
                {fixedQuery}: <span className='italic'>{queryValue}</span>
            </Text>
        </div>
    );
};

export default SearchBanner;

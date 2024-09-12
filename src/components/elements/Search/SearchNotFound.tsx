import { useHeader } from '@/src/store/header';
import { EnumBtn, EnumText } from '@/src/types/enums';
import { Btn, BtnLink, Subtitle, Text } from '../../ui';

const SearchNotFound = () => {
    const toggleSearch = useHeader((state) => state.toggleSearch);

    return (
        <div className='relative md:col-span-2 xl:col-span-3 w-full text-center'>
            <Subtitle className='mb-5 last:mb-0'>
                🔍 <span className='text-red'>No</span> Results Found!
            </Subtitle>

            <Text textSize={EnumText.large} className='flex flex-col gap-1 mb-5 sm:mb-7 last:mb-0'>
                <p>
                    Unfortunately, <span className='font-medium text-red'>no</span> results were found{' '}
                    <span className='font-medium text-red'>for</span> your search.
                </p>
                <p>
                    Try refining your query <span className='font-medium text-red'>or</span> use different keywords.
                </p>
            </Text>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full'>
                <Btn onClick={toggleSearch}>Search Again</Btn>

                <Text textSize={EnumText.large} className='hidden sm:inline-block'>
                    or
                </Text>

                <BtnLink href='/' btnType={EnumBtn.withIcon}>
                    Back Home
                </BtnLink>
            </div>
        </div>
    );
};

export default SearchNotFound;

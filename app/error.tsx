'use client';
import { PATHS } from '@/src/variables/paths';
import { Btn, BtnLink, Title } from '@/src/components/ui';
import { EnumBtn } from '@/src/types/enums';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: React.FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <section className='relative w-full my-6 xl:my-8'>
            <Title className='mb-5 last:mb-0'>{error?.message}</Title>

            <div className='flex flex-wrap gap-2 sm:gap-2.5 w-full'>
                <BtnLink href={PATHS.HOME} btnType={EnumBtn.withIcon}>
                    Back Home
                </BtnLink>

                <Btn onClick={() => reset()}>Retry</Btn>
            </div>
        </section>
    );
};

export default Error;

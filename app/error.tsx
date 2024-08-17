'use client';
import { Btn, Title } from '@/src/components/ui';

type Props = {
    error?: Error;
    reset?: () => void;
};

const Error: React.FC<Props> = ({ error, reset = () => {} }) => {
    return (
        <section className='relative w-full'>
            <Title className='mb-5 last:mb-0'>{error?.message}</Title>
            <Btn onClick={() => reset()}>Retry</Btn>
        </section>
    );
};

export default Error;

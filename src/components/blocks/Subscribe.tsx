import { EnumBtn } from '@/src/types/enums';
import { Btn, Input, Label, Subtitle, Text } from '../ui';
import { Mail } from 'lucide-react';

type Props = {
    className?: string;
};

const Subscribe: React.FC<Props> = ({ className = '' }) => {
    return (
        <section
            className={`relative flex flex-wrap items-center justify-between w-full rounded-md p-4 sm:p-5 md:p-8 lg:p-12 xl:p-16 bg-red ${className}`}
        >
            <div className='w-full md:w-[45%] lg:w-[40%] xl:w-[35%] text-white mb-5 md:mb-0 last:mb-0'>
                <Subtitle className='mb-1 sm:mb-2 xl:mb-3 last:mb-0'>Subscribe Our Newsletter</Subtitle>
                <Text>Stay updated with the latest news and exclusive content by subscribing to our newsletter.</Text>
            </div>

            <form className='flex flex-col sm:flex-row gap-3 sm:gap-2 w-full md:w-[50%] xl:w-[45%]'>
                <Label className='flex items-center w-full'>
                    <Mail className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
                    <Input name='email' placeholder='Enter your email' className='pl-9 lg:pl-10' />
                </Label>

                <Btn type='submit' btnType={EnumBtn.darkWithIcon}>
                    Subscribe
                </Btn>
            </form>
        </section>
    );
};

export default Subscribe;

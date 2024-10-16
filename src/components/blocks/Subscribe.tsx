import { EnumBtn, EnumSubscribe, EnumTitle } from '@/src/types/enums';
import { Btn, Input, Label, Text, Title } from '../ui';
import { Mail } from 'lucide-react';
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
            <div
                className={cn('w-full text-white mb-5 md:mb-0 last:mb-0', {
                    'md:w-[45%] lg:w-[40%] xl:w-[35%]': type === EnumSubscribe.default,
                    'md:w-[45%] lg:w-full lg:mb-5': type === EnumSubscribe.small,
                })}
            >
                <Title titleType={EnumTitle.h3} className='mb-2 last:mb-0'>
                    Subscribe Our Newsletter
                </Title>

                <Text className={cn({ 'lg:hidden': type === EnumSubscribe.small })}>
                    Stay updated with the latest news and exclusive content by subscribing to our newsletter.
                </Text>
            </div>

            <form
                className={cn('flex flex-col gap-3 w-full', {
                    'sm:flex-row sm:gap-2 md:w-[50%] xl:w-[45%]': type === EnumSubscribe.default,
                    'sm:flex-row lg:flex-col sm:gap-2 lg:gap-3 md:w-[50%] lg:w-full': type === EnumSubscribe.small,
                })}
            >
                <Label className='flex items-center w-full'>
                    <Mail className='absolute z-10 left-2 w-5 lg:w-6 h-5 lg:h-6 stroke-1 text-black/50' />
                    <Input name='email' placeholder='Enter your email' className='pl-9 lg:pl-10' />
                </Label>

                <Btn
                    type='submit'
                    btnType={EnumBtn.darkWithIcon}
                    className={cn({ 'lg:w-full': type === EnumSubscribe.small })}
                >
                    Subscribe
                </Btn>
            </form>
        </section>
    );
};

export default Subscribe;

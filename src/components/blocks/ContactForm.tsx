import { EnumSubtitle } from '@/src/types/enums';
import { GetInTouchForm } from '../elements';
import { Subtitle, Text } from '../ui';

type Props = {
    className?: string;
};

const ContactForm: React.FC<Props> = ({ className = '' }) => {
    return (
        <section className={`relative grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-5 lg:gap-10 w-full ${className}`}>
            <div className='w-full'>
                <div className='w-full mb-5 lg:mb-8 last:mb-0'>
                    <Subtitle subType={EnumSubtitle.h3} className='mb-2 last:mb-0'>
                        Get in touch
                    </Subtitle>

                    <Text className='w-full sm:max-w-[90%] lg:max-w-[80%]'>
                        Select layout follower boolean editor flows. Scrolling variant move font group variant layout
                        device share.
                    </Text>
                </div>

                <GetInTouchForm />
            </div>

            <div className='relative w-full h-64 sm:h-80 md:h-full row-start-1 md:row-start-auto rounded-lg skeleton'>
                <iframe
                    width='100%'
                    height='600'
                    className='absolute top-0 left-0 w-full h-full'
                    src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=93X%20Hilgard%20Ave,%20Los%20Angeles,%20CA%20900XX,%20United%20States+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                />
            </div>
        </section>
    );
};

export default ContactForm;

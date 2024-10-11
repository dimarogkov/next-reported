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
                    <Subtitle className='mb-2 sm:mb-3 last:mb-0'>Get in touch</Subtitle>

                    <Text className='w-full sm:max-w-[90%] lg:max-w-[80%]'>
                        Select layout follower boolean editor flows. Scrolling variant move font group variant layout
                        device share.
                    </Text>
                </div>

                <GetInTouchForm />
            </div>

            <div className='w-full h-64 sm:h-80 md:h-full row-start-1 md:row-start-auto rounded-lg skeleton'></div>
        </section>
    );
};

export default ContactForm;

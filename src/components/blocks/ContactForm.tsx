import { ContactCont } from '../elements/Contact';

type Props = {
    className?: string;
};

const ContactForm: React.FC<Props> = ({ className = '' }) => {
    return (
        <section
            className={`relative grid md:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-5 lg:gap-10 w-full ${className}`}
        >
            <ContactCont />

            <div className='relative w-full h-64 sm:h-80 md:h-[470px] row-start-1 md:row-start-auto rounded-lg skeleton'>
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

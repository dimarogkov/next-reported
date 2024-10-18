import { contactInfo } from '@/src/variables/contact-info';
import { ContactInfoCard } from '../elements/Contact';

type Props = {
    className?: string;
};

const ContactInfo: React.FC<Props> = ({ className = '' }) => {
    const contactInfos = contactInfo;

    return (
        <section className={`relative grid lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-4 xl:gap-5 w-full ${className}`}>
            {contactInfos.map((info) => (
                <ContactInfoCard info={info} key={info.id} />
            ))}
        </section>
    );
};

export default ContactInfo;

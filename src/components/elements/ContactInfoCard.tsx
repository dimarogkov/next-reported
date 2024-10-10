import { IContactInfo } from '@/src/types/interfaces/ContactInfo';
import { Subtitle, Text } from '../ui';

type Props = {
    info: IContactInfo;
};

const ContactInfoCard: React.FC<Props> = ({ info }) => {
    const { title, textArr, icon: InfoIcon } = info;

    return (
        <div className='relative w-full text-center rounded-md px-4 py-6 lg:py-8 border border-gray'>
            <div className='w-full mb-4 md:mb-5 last:mb-0'>
                <InfoIcon className='w-10 lg:w-12 h-10 lg:h-12 stroke-1 m-auto text-red' />
            </div>

            <div className='w-full'>
                <Subtitle className='text-red mb-1 md:mb-2 last:mb-0'>{title}</Subtitle>

                <Text className='w-full'>
                    {textArr.map(({ id, hrefPart, text, isLink }) =>
                        isLink ? (
                            <p key={id}>
                                <a
                                    href={`${hrefPart}:${text}`}
                                    className='transition-opacity duration-300 hover:opacity-75'
                                >
                                    {text}
                                </a>
                            </p>
                        ) : (
                            <p key={id}>{text}</p>
                        )
                    )}
                </Text>
            </div>
        </div>
    );
};

export default ContactInfoCard;

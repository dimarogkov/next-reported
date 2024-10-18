import { EnumSubmittedInfo, EnumTitle } from '@/src/types/enums';
import { Text, Title } from '../ui';
import cn from 'classnames';

type Props = {
    type?: string;
};

const SubmittedInfo: React.FC<Props> = ({ type = EnumSubmittedInfo.black }) => {
    return (
        <div className='relative w-full'>
            <Title
                titleType={EnumTitle.h3}
                className={cn('mb-2 sm:mb-2.5 last:mb-0', {
                    'text-black': type === EnumSubmittedInfo.black,
                    'text-white': type === EnumSubmittedInfo.white,
                })}
            >
                The form has been successfully submitted!
            </Title>

            <Text className={cn({ 'text-white/90': type === EnumSubmittedInfo.white })}>
                We appreciate your interest and will review your submission shortly. You will receive a confirmation
                email with the details soon.
            </Text>
        </div>
    );
};

export default SubmittedInfo;

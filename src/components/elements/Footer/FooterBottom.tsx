import Link from 'next/link';
import { DEVELOPER_NAME, PROJECT_NAME } from '@/src/variables';
import { EnumText } from '@/src/types/enums';
import { Text } from '../../ui';

const FooterBottom: React.FC = () => {
    return (
        <div className='w-full p-4 sm:p-5 border-t border-white/40 text-white/80'>
            <div className='flex flex-wrap justify-between w-full text-center md:text-left max-w-screen-2xl m-auto'>
                <Text textSize={EnumText.small} className='w-full md:w-auto mb-2.5 last:mb-0'>
                    <span>Design by </span>
                    <Link href='/' className='underline'>
                        {PROJECT_NAME}
                    </Link>
                    <span>. Powered by </span>
                    <Link href='https://github.com/dimarogkov' target='_blank' className='underline'>
                        {DEVELOPER_NAME}
                    </Link>
                    .
                </Text>

                <Text textSize={EnumText.small} className='w-full md:w-auto'>
                    Copyright © 2023 ${PROJECT_NAME}. All rights reserved.
                </Text>
            </div>
        </div>
    );
};

export default FooterBottom;

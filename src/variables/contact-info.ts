import { IContactInfo } from '../types/interfaces/ContactInfo';
import { MailPlus, MapPinned, PhoneCall } from 'lucide-react';

export const CONTACT_INFO: IContactInfo[] = [
    {
        id: 0,
        title: 'Visit Our Office',
        textArr: [
            {
                id: 0,
                hrefPart: '',
                text: '93X Hilgard Ave, Los Angeles, CA 900XX, United States.',
                isLink: false,
            },
        ],
        icon: MapPinned,
    },
    {
        id: 1,
        title: 'Email Address',
        textArr: [
            {
                id: 0,
                hrefPart: 'mailto',
                text: 'example@exdosstudio.com',
                isLink: true,
            },
            {
                id: 1,
                hrefPart: 'mailto',
                text: 'info@exdosstudio.com',
                isLink: true,
            },
        ],
        icon: MailPlus,
    },
    {
        id: 2,
        title: 'Phone Number',
        textArr: [
            {
                id: 0,
                hrefPart: 'tel',
                text: '+1-2353-4352-555',
                isLink: true,
            },
            {
                id: 1,
                hrefPart: 'tel',
                text: '01 (541) 258 360',
                isLink: true,
            },
        ],
        icon: PhoneCall,
    },
];

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const phoneRegex = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/;

const validationSchema = yup
    .object({
        name: yup.string().trim().required('Missing name'),
        lastName: yup.string().trim().required('Missing lastName'),
        email: yup.string().trim().required('Missing email').email('Invalid email format'),
        phone: yup
            .string()
            .trim()
            .required('Missing phone')
            .matches(phoneRegex, 'Phone number must be in correct format - +380 XX XXX XX XX'),
    })
    .required();

export const contactFormOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        area: '',
    },
};

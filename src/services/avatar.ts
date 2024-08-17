import axios from 'axios';
import { AVATAR_API_KEY, AVATAR_URL } from '../variables';

export const getAvatar = (name: string) => {
    return axios.get<string>(`${AVATAR_URL}/${name}.svg?apikey=${AVATAR_API_KEY}`);
};

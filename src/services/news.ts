import axios from 'axios';
import { INews } from '../types/interfaces/News';
import { NEWS_URL } from '../variables';

export const getNewsByCategory = async (category: string) => {
    const response = await axios.get<INews[]>(`${NEWS_URL}/all?category=${category}`);

    return response.data;
};

import axios from 'axios';
import { INews } from '../types/interfaces/News';
import { NEWS_URL } from '../variables';

export const getTopNews = () => {
    return axios.get<INews[]>(`${NEWS_URL}/all?isTopNews=true`);
};

export const getNewsByCategory = (category: string) => {
    return axios.get<INews[]>(`${NEWS_URL}/all?category=${category}`);
};

import axios from 'axios';
import { NEWS_URL } from '../variables';
import { INews } from '../types/interfaces/News';

export const getNewsByCategory = async (category: string) => {
    const response = await axios.get<INews[]>(`${NEWS_URL}/all?category=${category}`);

    return response.data;
};

export const getNewsWithParams = async (params: string) => {
    const response = await axios.get<INews[]>(`${NEWS_URL}/all?${params}`);

    return response.data;
};

export const getNewsById = async (newsId: string) => {
    const response = await axios.get<INews[]>(`${NEWS_URL}/all?id=${newsId}`);

    return response.data[0];
};

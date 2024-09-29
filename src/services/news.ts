import axios from 'axios';
import { API_URL } from '../variables';
import { INews } from '../types/interfaces/News';

export const getNewsByCategory = async (category: string) => {
    const response = await axios.get<INews[]>(`${API_URL}/all?category=${category}`);

    return response.data;
};

export const getNewsWithParams = async (params: string) => {
    const response = await axios.get<INews[]>(`${API_URL}/all?${params}`);

    return response.data;
};

export const getNewsById = async (newsId: string) => {
    const response = await axios.get<INews[]>(`${API_URL}/all?id=${newsId}`);

    return response.data[0];
};

export const getNewsByAuthor = async (authorName: string) => {
    const response = await axios.get<INews[]>(`${API_URL}/all?authors=${authorName}`);

    return response.data;
};

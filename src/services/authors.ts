import axios from 'axios';
import { API_URL } from '../variables';
import { IAuthor } from './../types/interfaces/Author';

export const getAuthors = async () => {
    const response = await axios.get<IAuthor[]>(`${API_URL}/authors`);

    return response.data;
};

export const getTopAuthors = async (count: number) => {
    const response = await axios.get<IAuthor[]>(`${API_URL}/authors`);
    const authors = response.data;

    return authors.sort((a, b) => b.news.length - a.news.length).slice(0, count);
};

export const getAuthorByName = async (name: string) => {
    const response = await axios.get<IAuthor[]>(`${API_URL}/authors?name=${name}`);

    return response.data[0];
};

import axios from 'axios';
import { NEWS_API_KEY, NEWS_PARAMETERS, NEWS_URL } from '../variables';
import { ISearchNews } from '../types/interfaces/News';

export const getHeroNews = () => {
    const heroParameters = `categories=politics&number=1`;

    return axios.get<ISearchNews>(
        `${NEWS_URL}/search-news?${NEWS_PARAMETERS}&${heroParameters}&api-key=${NEWS_API_KEY}`
    );
};

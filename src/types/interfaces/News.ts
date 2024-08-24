export interface INews {
    id: string;
    title: string;
    text: string;
    summary: string;
    image: string;
    publish_date: string;
    authors: string[];
    category: string;
    isTopNews: boolean;
}

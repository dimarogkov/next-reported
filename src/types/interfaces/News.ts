export interface ISearchNews {
    offset: number;
    number: number;
    available: number;
    news: INews[];
}

export interface INews {
    id: number;
    title: string;
    text: string;
    summary: string;
    url: string;
    image: string;
    publish_date: string;
    catgory: string;
    authors: string[];
}

export interface IContentInfoText {
    id: number;
    text: string;
}

export interface IContentInfo {
    id: number;
    title: string;
    content: IContentInfoText[];
}

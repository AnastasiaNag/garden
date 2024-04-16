export interface IArticle {
    id: string | number;
    title: string,
    text: string | number,
    img: string,
}

export interface CounterState {
    value: number;
    articles: IArticle[];
    id: IArticle[];
    article: IArticle;
}

export interface PCreateArticle {
    title: string;
    text: string | number;
    img: string,
}

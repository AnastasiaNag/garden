export interface IGood {
    title: string,
    text: string | number,
    id: string | number
    img: string,
}

export interface CounterState {
    value: number;
    goods: IGood[];
    id: IGood[];
}

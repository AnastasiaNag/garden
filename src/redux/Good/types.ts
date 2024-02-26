export interface IGood {
    title: string,
    text: string | number,
}

export interface CounterState {
    value: number;
    goods: IGood[];
    id: IGood[];
}

export interface IGood {
    id: string | number;
    title: string,
    text: string | number,
    img: string,
    price: string | number,
}

export interface CounterState {
    value: number;
    goods: IGood[];
    id: IGood[];
    good: IGood;
}

export interface PCreateGood {
    title: string;
    text: string | number;
    price: string | number;
    img: string,
}

export interface IWork {
    title: string,
    text: string | number,
}

export interface CounterState {
    value: number;
    works: IWork[];
    id: IWork[];
}
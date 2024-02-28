export interface IWork {
    id: string | number;
    title: string,
    text: string | number,
}

export interface CounterState {
    value: number;
    works: IWork[];
    id: IWork[];
    work: IWork;
}
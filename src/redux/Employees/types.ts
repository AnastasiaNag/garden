export interface IEmployee {
    id: string | number;
    title: string,
    text: string | number,
    img: string,
}

export interface CounterState {
    value: number;
    employees: IEmployee[];
    id: IEmployee[];
    employee: IEmployee;
}

export interface PCreateEmployee {
    title: string;
    text: string | number;
    img: string,
}

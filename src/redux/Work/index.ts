import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IWork } from './types';
import axios from 'axios';

const initialState: CounterState = {
    value: 0,
    works: [],
    id: [],
    work: {
        id: '',
        title: '',
        text: ''
    },
};

export const counterSlice = createSlice({
    name: 'IWork',
    initialState,
    reducers: {
       
    },
    extraReducers(builder) {
        builder.addCase(getWorks.fulfilled, (state, action) => {
            state.works = action.payload;
        })
        builder.addCase(getWork.fulfilled, (state, action) => {
            state.work = action.payload;
        })
    }
});


export default counterSlice.reducer;

export const getWorks = createAsyncThunk('work/get', async (): Promise<IWork[]> => {
    const works = (await axios.get('http://localhost:3001/works')).data;
    return works;
});
export const getWork = createAsyncThunk('work/getWork', async (itemId): Promise<IWork> => {
    const work = (await axios.get(`http://localhost:3001/works/${itemId}`)).data;
    return work;
});

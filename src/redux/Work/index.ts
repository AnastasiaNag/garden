import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IWork } from './types';
import axios from 'axios';

const initialState: CounterState = {
    value: 0,
    works: [],
    id: [],
};

export const counterSlice = createSlice({
    name: 'IWork',
    initialState,
    reducers: {
       
    },
    extraReducers(builder) {
        builder.addCase(getWorks.fulfilled, (state, action) => {
            state.works = action.payload;
        });
    },
});


export default counterSlice.reducer;

export const getWorks = createAsyncThunk('work/get', async (): Promise<IWork[]> => {
    const works = (await axios.get('http://localhost:3001/works')).data;
    return works;
});
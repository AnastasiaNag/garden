import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IGood } from './types';
import axios from 'axios';

const initialState: CounterState = {
    value: 0,
    goods: [],
    id: [],
};

export const counterSlice = createSlice({
    name: 'Good',
    initialState,
    reducers: {
       
    },
    extraReducers(builder) {
        builder.addCase(getGoods.fulfilled, (state, action) => {
            state.goods = action.payload;
        });
    },
});


export default counterSlice.reducer;

export const getGoods = createAsyncThunk('item/get', async (): Promise<IGood[]> => {
    const goods = (await axios.get('http://localhost:3001/goods')).data;

    return goods;
});

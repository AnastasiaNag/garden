import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CounterState {
    admin: IAdmin;
}

export interface IAdmin {
    pas: string | number;
}

const initialState: CounterState = {
    admin: {
        pas: ''
    },
};

export const counterSlice = createSlice({
    name: 'IAdmin',
    initialState,
    reducers: {
       
    },
    extraReducers(builder) {
        builder.addCase(getAdmin.fulfilled, (state, action) => {
            state.admin = action.payload;
        })
    }
});


export default counterSlice.reducer;

export const getAdmin = createAsyncThunk('work/get', async (): Promise<IAdmin> => {
    const admin = (await axios.get('http://localhost:3001/admin')).data;
    return admin;
});

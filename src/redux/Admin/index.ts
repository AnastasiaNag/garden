import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils';

export interface CounterState {
    admin: IAdmin;
}

export interface IAdmin {
    password: string | number;
    login: string | number;
}

const initialState: CounterState = {
    admin: {
        password: '',
        login: ''
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

export const getAdmin = createAsyncThunk('admin/get', async (): Promise<IAdmin> => {
    const admin = (await axios.get(BASE_URL + '/admin')).data[0];
    return admin;
});

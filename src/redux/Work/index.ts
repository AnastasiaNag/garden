import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, IWork, PCreateWork } from './types';
import axios from 'axios';

const initialState: CounterState = {
    value: 0,
    works: [],
    id: [],
    work: {
        id: '',
        title: '',
        text: '',
        img: ''
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
        builder.addCase(deleteWork.fulfilled, (state, action) => {
            const deletedPostId = action.payload;
            state.works = state.works.filter(item => item.id !== deletedPostId);
        });
        builder.addCase(add.fulfilled, (state, action) => {
            state.works.push(action.payload);
        });
        builder.addCase(editWork.fulfilled, (state, action) => {
            const { updatedWork } = action.payload;
            state.works = state.works.map(item => (item.id === updatedWork.id ? updatedWork : item));
        });
    }
});


export default counterSlice.reducer;

export const getWorks = createAsyncThunk('work/get', async (): Promise<IWork[]> => {
    const works = (await axios.get('http://localhost:3001/works')).data;
    return works;
});
export const getWork = createAsyncThunk('work/getWork', async (itemId: number | string | null): Promise<IWork> => {
    const work = (await axios.get(`http://localhost:3001/works/${itemId}`)).data;
    return work;
});


export const deleteWork = createAsyncThunk('post/delete', async (itemId: number | string): Promise<string | number> => {
    await axios.delete(`http://localhost:3001/works/${itemId}`);

    return itemId;
});

export const add = createAsyncThunk('post/post', async (payload: PCreateWork): Promise<IWork> => {
    const item = (await axios.post('http://localhost:3001/works', payload)).data;
    return item;
});

export const editWork = createAsyncThunk('post/saveChanges', async (data: { formValues: any; itemId: string | number }) => {
    const { formValues, itemId } = data;
    await axios.put(`http://localhost:3001/works/${itemId}`, formValues);
    const updatedWork = (await axios.get(`http://localhost:3001/works/${formValues.id}`)).data;
    return { updatedWork };
});

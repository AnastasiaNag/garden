import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CounterState, IGood } from './types';
import axios from 'axios';
import { BASE_URL } from '../../utils';

const initialState: CounterState = {
  value: 0,
  goods: [],
  id: [],
  good: {
    id: '',
    title: '',
    text: '',
    img: '',
    price: '',
    category: '',
  },
};

export const counterSlice = createSlice({
  name: 'Good',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGoods.fulfilled, (state, action) => {
      state.goods = action.payload;
    });
    builder.addCase(getGood.fulfilled, (state, action) => {
      state.good = action.payload;
    });
    builder.addCase(deleteGood.fulfilled, (state, action) => {
      const deletedPostId = action.payload;
      state.goods = state.goods.filter((item) => item.id !== deletedPostId);
    });
    builder.addCase(addGood.fulfilled, (state, action) => {
      state.goods.push(action.payload);
    });
    builder.addCase(editGood.fulfilled, (state, action) => {
      const { updatedGood } = action.payload;
      state.goods = state.goods.map((item) => (item.id === updatedGood.id ? updatedGood : item));
    });
  },
});

export default counterSlice.reducer;

export const getGoods = createAsyncThunk('good/get', async (): Promise<IGood[]> => {
  const goods = (await axios.get(BASE_URL + '/goods')).data;
  return goods;
});
export const getGood = createAsyncThunk('good/getGood', async (itemId: string | number | null): Promise<IGood> => {
  const good = (await axios.get(BASE_URL + `/goods/${itemId}`)).data;
  return good;
});

export const deleteGood = createAsyncThunk('good/delete', async (itemId: string): Promise<string> => {
  await axios.delete(BASE_URL + `/goods/${itemId}`);
  return itemId;
});

export const addGood = createAsyncThunk('good/add', async (payload: Partial<IGood>): Promise<IGood> => {
  const newGood = (await axios.post(BASE_URL + '/goods', payload)).data;
  return newGood;
});

export const editGood = createAsyncThunk('good/edit', async (data: { formValues: any, itemId: string | number }) => {
  const { formValues, itemId } = data;
  await axios.put(BASE_URL + `/goods/${itemId}`, formValues);
  const updatedGood = (await axios.get(BASE_URL + `/goods/${formValues.id}`)).data;
  return { updatedGood };
});

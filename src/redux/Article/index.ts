import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CounterState, IArticle } from './types';
import axios from 'axios';

const initialState: CounterState = {
    value: 0,
    articles: [],
    id: [],
    article: {
        id: '',
        title: '',
        text: '',
        img: '',
    }
};

export const counterSlice = createSlice({
  name: 'Article',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
    builder.addCase(getArticle.fulfilled, (state, action) => {
      state.article = action.payload;
    });
    builder.addCase(deleteArticle.fulfilled, (state, action) => {
      const deletedPostId = action.payload;
      state.articles = state.articles.filter((item) => item.id !== deletedPostId);
    });
    builder.addCase(addArticle.fulfilled, (state, action) => {
      state.articles.push(action.payload);
    });
    builder.addCase(editArticle.fulfilled, (state, action) => {
      const { updatedArticle } = action.payload;
      state.articles = state.articles.map((item) => (item.id === updatedArticle.id ? updatedArticle : item));
    });
  },
});



export default counterSlice.reducer;

export const getArticles = createAsyncThunk('articles/get', async (): Promise<IArticle[]> => {
    const articles = (await axios.get('http://localhost:3001/articles')).data;
    return articles;
});
export const getArticle = createAsyncThunk('article/getArticle', async (itemId: string | number | null): Promise<IArticle> => {
    const article = (await axios.get(`http://localhost:3001/articles/${itemId}`)).data;
    return article;
});

export const deleteArticle = createAsyncThunk('article/delete', async (itemId: string): Promise<string> => {
    await axios.delete(`http://localhost:3001/articles/${itemId}`);
    return itemId;
});

export const addArticle = createAsyncThunk('article/add', async (payload: Partial <IArticle>): Promise<IArticle> => {
    const newGood = (await axios.post('http://localhost:3001/articles', payload)).data;
    return newGood;
});

export const editArticle = createAsyncThunk('article/edit', async (data: { formValues: any; itemId: string | number }) => {
    const { formValues, itemId } = data;
    await axios.put(`http://localhost:3001/articles/${itemId}`, formValues);
    const updatedArticle = (await axios.get(`http://localhost:3001/articles/${formValues.id}`)).data;
    return {updatedArticle};
});
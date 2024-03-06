import { configureStore } from '@reduxjs/toolkit';
import good from './Good';
import work from './Work';
import admin from './Admin';

export const store = configureStore({
    reducer: {
        good,
        work,
        admin,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import {configureStore} from '@reduxjs/toolkit';
import {poolReducer} from './reducers/poolSlice';

export const store = configureStore({reducer: poolReducer});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

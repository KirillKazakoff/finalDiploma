/* eslint-disable @typescript-eslint/indent */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import searchWayReducer from './slices/searchWaySlice';
import statusReducer from './slices/statusSlice';

export const store = configureStore({
    reducer: {
        searchWay: searchWayReducer,
        statuses: statusReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

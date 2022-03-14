/* eslint-disable @typescript-eslint/indent */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import searchWayReducer from './slices/searchWaySlice';
import searchDateReducer from './slices/searchDateSlice';
import searchFormReducer from './slices/searchFormSlice';
import ticketsReducer from './slices/ticketsSlice';
import searchFilterReducer from './slices/searchFilterSlice';
import lastTicketsReducer from './slices/lastTicketsSlice';

export const store = configureStore({
    reducer: {
        searchForm: searchFormReducer,
        searchFilter: searchFilterReducer,
        searchWay: searchWayReducer,
        searchDate: searchDateReducer,

        tickets: ticketsReducer,
        lastTicketsSlice: lastTicketsReducer,
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

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketsStateT, TicketsT } from '../../types/models/modelTickets';
import { FetchStatusT } from '../../types/typesPayload';
import type { RootState } from '../store';

const initialState: TicketsStateT = {
    ticketsInfo: {
        tickets: [],
        total_count: 0,
    },
    statusFetch: 'idle',
};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setTickets: (state, action: PayloadAction<TicketsT>) => {
            state.ticketsInfo = action.payload;
        },
        setFetchStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.statusFetch = action.payload;
        },
    },
});

export const { setTickets, setFetchStatus } = ticketsSlice.actions;
export const selectTickets = (state: RootState) => state.tickets.ticketsInfo;
export const selectTotalCount = (state: RootState) => state.tickets.ticketsInfo.total_count;
export const selectFetchStatus = (state: RootState) => state.tickets.statusFetch;

export default ticketsSlice.reducer;

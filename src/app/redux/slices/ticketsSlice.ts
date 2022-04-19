/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketsStateT, TicketsT } from '../../types/models/modelTickets';
import { FetchStatusT, PayloadSliderFilter } from '../../types/typesPayload';
import type { RootState } from '../store';

const initialState: TicketsStateT = {
    ticketsInfo: {
        tickets: [],
        total_count: 0,
    },
    costLimits: {
        minTotal: 0,
        maxTotal: 0,
    },
    statusFetch: 'idle',
    activeTicket: null,
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
        setCostLimit: (state, action: PayloadAction<PayloadSliderFilter>) => {
            const { name, value } = action.payload;
            state.costLimits[name] = value;
        },
        refreshTickets: () => initialState,
    },
});

export const {
    setTickets, setFetchStatus, setCostLimit, refreshTickets,
} = ticketsSlice.actions;

export const selectTickets = (state: RootState) => state.tickets.ticketsInfo;
export const selectTotalCount = (state: RootState) => state.tickets.ticketsInfo.total_count;
export const selectFetchStatus = (state: RootState) => state.tickets.statusFetch;
export const selectCostLimits = (state: RootState) => state.tickets.costLimits;

export default ticketsSlice.reducer;

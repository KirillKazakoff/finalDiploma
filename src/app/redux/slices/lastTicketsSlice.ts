/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import { TicketRouteT } from '../../types/models/modelTickets';
import type { RootState } from '../store';
import { LastTicketsStateT } from '../../types/typesSlices';

const initialState: LastTicketsStateT = {
    status: 'idle',
    lastTickets: [],
};

export const lastTicketsSlice = createSlice({
    name: 'lastTickets',
    initialState,
    reducers: {
        setFetchStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.status = action.payload;
        },
        setLastTickets: (state, action: PayloadAction<TicketRouteT[]>) => {
            state.lastTickets = action.payload;
        },
        refreshLast: () => initialState,
    },
});

export const { setFetchStatus, setLastTickets, refreshLast } = lastTicketsSlice.actions;

export const selectLast = (state: RootState) => {
    const selectedThree = [];
    const { lastTickets } = state.lastTicketsSlice;
    if (lastTickets.length < 3) return lastTickets;

    for (let i = 0; i < 3; i += 1) {
        selectedThree.push(lastTickets[i]);
    }
    return selectedThree;
};
export const selectFetchStatus = (state: RootState) => state.lastTicketsSlice.status;

export default lastTicketsSlice.reducer;

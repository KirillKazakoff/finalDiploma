/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import { TicketRouteT } from '../../types/models/modelTickets';

type LastTicketsStateT = { status: FetchStatusT; lastTickets: TicketRouteT[] };

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
    },
});

export const { setFetchStatus, setLastTickets } = lastTicketsSlice.actions;
export default lastTicketsSlice.reducer;

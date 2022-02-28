/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketsStateT, TicketsT } from '../../types/typesTicket';

const initialState: TicketsStateT = null;

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setTickets: (state, action: PayloadAction<TicketsT>) => {
            state = action.payload;
        },
    },
});

export const { setTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;

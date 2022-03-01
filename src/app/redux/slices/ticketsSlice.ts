/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketsStateT, TicketsT } from '../../components/lib/Tickets/ticketsModel';
import type { RootState } from '../store';

const initialState: TicketsStateT = null;

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setTickets: (state, action: PayloadAction<TicketsT>) => {
            return action.payload;
        },
    },
});

export const { setTickets } = ticketsSlice.actions;
export const selectTickets = (state: RootState) => state.tickets;

export default ticketsSlice.reducer;

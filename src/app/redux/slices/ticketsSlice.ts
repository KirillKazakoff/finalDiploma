/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketsStateT, TicketsT } from '../../types/models/modelTickets';
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
export const selectTotalCount = (state: RootState) => state.tickets.total_count;

// export const selectFilteredTickets = (state: RootState) => {
//     const {
//         tickets: { tickets },
//         searchFilter,
//     } = state;
//     const { aside, top } = searchFilter;
//     const filteredTickets = tickets.map((ticket) => {
//         const {
//             is_express,
//             have_first_class,
//             have_second_class,
//             have_third_class,
//             have_fourth_class,
//             have_wifi,
//         } = ticket.ticketRoute.departure;
//         const
//     });
//     return filteredTickets;
// };
export default ticketsSlice.reducer;

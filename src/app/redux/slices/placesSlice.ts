/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ExtrasPricesT, TicketInfoT } from '../../types/models/modelTickets';
import type { RootState } from '../store';
import { PayloadExtraPrice } from '../../types/typesPayload';

export type ActiveCarT = 'idle' | 'first' | 'second' | 'third' | 'fourth';
type PlacesStateT = {
    activeTicket: null | TicketInfoT;
    carriageType: ActiveCarT;
    extras: ExtrasPricesT;
};

const initialState: PlacesStateT = {
    activeTicket: null,
    carriageType: 'idle',
    extras: {
        wifi_price: 0,
        linens_price: 0,
    },
};

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        setActiveTicket: (state, action: PayloadAction<TicketInfoT>) => {
            state.activeTicket = action.payload;
        },
        setCarType: (state, action: PayloadAction<ActiveCarT>) => {
            state.carriageType = action.payload;
        },
        setExtraPrice: (state, action: PayloadAction<PayloadExtraPrice>) => {
            const { name, value } = action.payload;
            state.extras[name] = value;
        },
    },
});

export const { setActiveTicket, setCarType, setExtraPrice } = placesSlice.actions;
export const selectActiveTicket = (state: RootState) => state.places.activeTicket;

export default placesSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketInfoT } from '../../types/models/modelTickets';
import type { RootState } from '../store';
import { PayloadCarType, PayloadExtraPrice } from '../../types/typesPayload';
import { CarContentT, PlacesStateT, ActiveCarT } from '../../types/typesSlices';

const initialCarContent: CarContentT = {
    carriageType: 'idle',
    extras: {
        wifi_price: 0,
        linens_price: 0,
    },
};

const initialState: PlacesStateT = {
    activeTicket: null,
    routes: {
        departure: {
            carriageType: 'idle',
            extras: {
                wifi_price: 0,
                linens_price: 0,
            },
        },
        arrival: {
            carriageType: 'idle',
            extras: {
                wifi_price: 0,
                linens_price: 0,
            },
        },
    },
};

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        setActiveTicket: (state, action: PayloadAction<TicketInfoT>) => {
            state.activeTicket = action.payload;
        },
        setCarType: (state, action: PayloadAction<PayloadCarType>) => {
            const { route, value } = action.payload;
            state.routes[route].carriageType = value;
        },
        setExtraPrice: (state, action: PayloadAction<PayloadExtraPrice>) => {
            const { name, value, route } = action.payload;
            state.routes[route].extras[name] = value;
        },
    },
});

export const { setActiveTicket, setCarType, setExtraPrice } = placesSlice.actions;

export const selectActiveTicket = (state: RootState) => state.places.activeTicket;

export default placesSlice.reducer;

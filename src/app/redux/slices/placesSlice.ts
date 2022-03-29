/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketInfoT } from '../../types/models/modelTickets';
import type { RootState } from '../store';
import { PayloadCar, PayloadCarType, PayloadExtraPrice } from '../../types/typesPayload';
import { CarContentT, PlacesStateT } from '../../types/typesSlices';

const initialCarContent: CarContentT = {
    carriageType: 'idle',
    extras: {
        wifi_price: 0,
        linens_price: 0,
    },
    activeCar: null,
};

const initialState: PlacesStateT = {
    activeTicket: null,
    routes: {
        departure: initialCarContent,
        arrival: initialCarContent,
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
        setActiveCar: (state, action: PayloadAction<PayloadCar>) => {
            const { route, value } = action.payload;
            state.routes[route].activeCar = value;
        },
    },
});

export const {
    setActiveTicket, setCarType, setExtraPrice, setActiveCar,
} = placesSlice.actions;

export const selectActiveTicket = (state: RootState) => state.places.activeTicket;

export default placesSlice.reducer;

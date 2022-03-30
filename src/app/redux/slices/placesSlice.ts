/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TicketInfoT } from '../../types/models/modelTickets';
import type { RootState } from '../store';
import {
    PayloadCar,
    PayloadCarType,
    PayloadExtraPrice,
    PayloadPlace,
} from '../../types/typesPayload';
import { CarContentT, PlacesStateT } from '../../types/typesSlices';

const initExtras = { wifi_price: 0, linens_price: 0 };

const initialCarContent: CarContentT = {
    carriageType: 'idle',
    extras: { ...initExtras },
    places: [],
    activeCar: null,
};

const initialState: PlacesStateT = {
    activeTicket: null,
    routes: {
        departure: { ...initialCarContent },
        arrival: { ...initialCarContent },
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
        setPlace: (state, action: PayloadAction<PayloadPlace>) => {
            const { route, place } = action.payload;
            state.routes[route].places.push(place);
        },
        removePlace: (state, action: PayloadAction<PayloadPlace>) => {
            const { route, place } = action.payload;
            const i = state.routes[route].places.findIndex((value) => {
                const carCheck = value.carNumber === place.carNumber;
                const placeCheck = value.placeNumber === place.placeNumber;
                return carCheck && placeCheck;
            });
            state.routes[route].places.splice(i, 1);
        },
        refreshPrice: (state, action: PayloadAction<string>) => {
            state.routes[action.payload].extras = { ...initExtras };
        },
        refresh: () => initialState,
    },
});

export const {
    setActiveTicket,
    setCarType,
    setExtraPrice,
    setActiveCar,
    setPlace,
    removePlace,
    refresh,
    refreshPrice,
} = placesSlice.actions;

export const selectActiveTicket = (state: RootState) => state.places.activeTicket;

export default placesSlice.reducer;

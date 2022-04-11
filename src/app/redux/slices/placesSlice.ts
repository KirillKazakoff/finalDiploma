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
import { initialState, initExtrasRoute } from './utils/initPlacesSlice';

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        setActiveTicket: (state, action: PayloadAction<TicketInfoT>) => {
            state.activeTicket = action.payload;
            const [departure, arrival] = state.activeTicket.trainsInfo;

            initExtrasRoute(state, departure);
            if (arrival) initExtrasRoute(state, arrival);
        },
        setCarType: (state, action: PayloadAction<PayloadCarType>) => {
            const { route, value } = action.payload;
            state.routes[route].carriageType = value;
        },
        setActiveCar: (state, action: PayloadAction<PayloadCar>) => {
            const { route, value } = action.payload;
            state.routes[route].activeCar = value;
        },
        setExtraPrice: (state, action: PayloadAction<PayloadExtraPrice>) => {
            const { name, value, route } = action.payload;
            const { carNumber } = state.routes[route].activeCar;
            const { extras } = state.routes[route];

            const index = extras.findIndex((extra) => extra.carNumber === carNumber);
            state.routes[route].extras[index].prices[name] = value;
        },
        setPlace: (state, action: PayloadAction<PayloadPlace>) => {
            const { route, place } = action.payload;
            state.routes[route].places.push(place);
        },
        removePlace: (state, action: PayloadAction<PayloadPlace>) => {
            const { route, place } = action.payload;

            const i = state.routes[route].places.findIndex((value) => {
                const carCheck = value.carNumber === place.carNumber;
                const placeCheck = value.seat_number === place.seat_number;
                return carCheck && placeCheck;
            });
            state.routes[route].places.splice(i, 1);
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
} = placesSlice.actions;

export const selectActiveTicket = (state: RootState) => state.places.activeTicket;
export const selectPlaces = (state: RootState) => state.places;
export const selectExtras = (route: string) => (state: RootState) => {
    const { activeCar, extras } = state.places.routes[route];
    const index = extras.findIndex((extra) => extra.carNumber === activeCar.carNumber);

    return extras[index].prices;
};

export default placesSlice.reducer;

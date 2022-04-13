/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonT } from '../../types/models/modelPerson';
import type { PayloadPasPlace } from '../../types/typesPayload';
import type { RootState } from '../store';

export type PasPlaceT = {
    placeId: string;
    price: number;
    coach_id: string;
    seat_number: number;
    person_info: PersonT;
};

type PasPlacesStateT = {
    [index: string]: PasPlaceT[];

    arrival: PasPlaceT[];
    departure: PasPlaceT[];
};

const initialState: PasPlacesStateT = {
    arrival: [],
    departure: [],
};

export const pasPlacesSlice = createSlice({
    name: 'pasPlaces',
    initialState,
    reducers: {
        pushPasPlace: (state, action: PayloadAction<PayloadPasPlace>) => {
            const { name, value } = action.payload;

            const placeMatch = state[name].findIndex((place) => {
                return place.placeId === value.placeId;
            });
            if (placeMatch === -1) {
                state[name].push(value);
            } else {
                state[name][placeMatch] = value;
            }
        },
        removePasPlace: (state, action: PayloadAction<PayloadPasPlace>) => {
            const { name, value } = action.payload;
            const index = state[name].findIndex((pasPlace) => {
                return pasPlace.placeId === value.placeId;
            });

            state[name].splice(index, 1);
        },
        refresherAhh: () => initialState,
    },
});

export const { pushPasPlace, removePasPlace, refresherAhh } = pasPlacesSlice.actions;
export const selectPasPlacesRoute = (route: string) => (state: RootState) => {
    return state.pasPlaces[route];
};

export default pasPlacesSlice.reducer;

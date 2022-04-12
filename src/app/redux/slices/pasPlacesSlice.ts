/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonT } from '../../types/models/modelPerson';
import type { PayloadPasPlace } from '../../types/typesPayload';
import type { RootState } from '../store';

export type PasPlaceT = {
    id: string;
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
        addPasPlace: (state, action: PayloadAction<PayloadPasPlace>) => {
            const { name, value } = action.payload;

            const placeMatch = state[name].findIndex((place) => {
                return place.id === value.id;
            });
            if (placeMatch === -1) {
                state[name].push(value);
            } else {
                state[name][placeMatch] = value;
            }
        },
        refresherAhh: () => initialState,
    },
});

export const { addPasPlace, refresherAhh } = pasPlacesSlice.actions;
export const selectPasPlacesRoute = (route: string) => (state: RootState) => {
    return state.pasPlaces[route];
};

export default pasPlacesSlice.reducer;

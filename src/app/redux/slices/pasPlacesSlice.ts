import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PassengerT } from '../../types/models/modelPerson';
import type { PayloadPasPlace } from '../../types/typesPayload';

export type PasPlaceT = {
    id: string;
    coach_id: string;
    seat_number: number;
    person_info: Omit<PassengerT, 'is_impaired'>;
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
            state[name].push(value);
        },
    },
});

export const { addPasPlace } = pasPlacesSlice.actions;

export default pasPlacesSlice.reducer;

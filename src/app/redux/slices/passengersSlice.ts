/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PassengerState } from '../../types/models/modelPerson';

export type PassengersState = {
    forms: PassengerState[];
};

// const initialPassenger: PassengerState = {
//     id: '',
//     is_adult: { ...initialInput },
//     last_name: { ...initialInput },
//     first_name: { ...initialInput },
//     patronymic: { ...initialInput },
//     gender: { ...initialInput },
//     birthday: { ...initialInput },
//     is_impaired: { ...initialInput },
//     document_type: { ...initialInput },
//     document_data: [],
// };

const initialState: any = {};

type PayloadInfoT = {
    id: string;
    field: string;
    value: string;
};

export const passengersSlice = createSlice({
    name: 'passengers',
    initialState,
    reducers: {
        setForms: (state, action: PayloadAction<any[]>) => {
            return action.payload.reduce(
                (forms, currentForm) => ({
                    ...forms,
                    [currentForm.id]: currentForm,
                }),
                {},
            );
        },
        setInput: (state, action: PayloadAction<PayloadInfoT>) => {
            const { id, field, value } = action.payload;
            state[id][field] = value;
        },
    },
});

export default passengersSlice.reducer;

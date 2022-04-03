/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import {
    PayloadError,
    PayloadFocus,
    PayloadFormError,
} from '../../../types/typesPayload';
import { InputDefaultT, DynamicInputDefaultT } from '../../../types/typesForms';
import type { PassengersState } from '../passengersSlice';

export type InputState = {
    value: string;
    wasFocused: boolean;
    error: string;
    formError: string;
    isActive: boolean;
};

export const initialInput: InputState = {
    value: '',
    error: '',
    formError: '',
    isActive: false,
    wasFocused: false,
};

export const inputReducers = {
    setInput: (state: any, action: PayloadAction<InputDefaultT>) => {
        const { name, value } = action.payload;
        state[name].value = value.toLowerCase();
    },
    setError: (state: any, action: PayloadAction<PayloadError>) => {
        const { name, error } = action.payload;
        state[name].error = error;
    },
    setFormError: (state: any, action: PayloadAction<PayloadFormError>) => {
        const { name, formError } = action.payload;
        state[name].formError = formError;
    },
    setActive: (state: any, action: PayloadAction<PayloadFocus>) => {
        const { name, isActive } = action.payload;
        state[name].isActive = isActive;
    },
    setBlured: (state: any, action: PayloadAction<PayloadFocus>) => {
        const { name, wasFocused } = action.payload;
        state[name].wasFocused = wasFocused;
    },
};

// export const inputReducersPassengers = {
//     setInput: (state: PassengersState, action: PayloadAction<DynamicInputDefaultT>) => {
//         const { name, value, id } = action.payload;
//         const index = state.forms.findIndex((form: any) => form.id === id);

//         state.forms[index][name] = value.toLowerCase();
//     },
// };

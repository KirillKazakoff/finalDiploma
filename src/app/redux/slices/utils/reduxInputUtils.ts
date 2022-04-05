/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import type {
    PayloadError,
    PayloadFocus,
    PayloadFormError,
} from '../../../types/typesPayload';
import { InputDefaultT } from '../../../types/typesForms';

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
        const { name, value, id } = action.payload;

        if (id) state[id].fields[name].value = value;
        else state[name].value = value;
    },
    setError: (state: any, action: PayloadAction<PayloadError>) => {
        const { name, error, id } = action.payload;

        if (id) state[id].fields[name].error = error;
        else state[name].error = error;
    },
    setFormError: (state: any, action: PayloadAction<PayloadFormError>) => {
        const { name, formError, id } = action.payload;

        if (id) state[id].fields[name].formError = formError;
        else state[name].formError = formError;
    },
    setActive: (state: any, action: PayloadAction<PayloadFocus>) => {
        const { name, isActive, id } = action.payload;

        if (id) state[id].fields[name].isActive = isActive;
        else state[name].isActive = isActive;
    },
    setBlured: (state: any, action: PayloadAction<PayloadFocus>) => {
        const { name, wasFocused, id } = action.payload;

        if (id) state[id].fields[name].wasFocused = wasFocused;
        else state[name].wasFocused = wasFocused;
    },
};

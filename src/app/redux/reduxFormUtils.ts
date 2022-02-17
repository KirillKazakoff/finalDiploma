/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import {
    InputDefault, PayloadError, PayloadFocus, PayloadIsFormError,
} from '../types';

export type InputState = {
    value: string;
    wasFocused: boolean;
    error: string;
    isFormError: boolean;
    isActive: boolean;
};

export const initialInput: InputState = {
    value: '',
    error: '',
    isFormError: true,
    isActive: false,
    wasFocused: false,
};

export const inputReducers = {
    setInput: (state: any, action: PayloadAction<InputDefault>) => {
        const { name, value } = action.payload;
        state[name].value = value.toLowerCase();
    },
    setError: (state: any, action: PayloadAction<PayloadError>) => {
        const { name, error } = action.payload;
        state[name].error = error;
    },
    setFormError: (state: any, action: PayloadAction<PayloadIsFormError>) => {
        const { name, isFormError } = action.payload;
        state[name].isFormError = isFormError;
    },
    setActive: (state: any, action: PayloadAction<PayloadFocus>) => {
        const { name, isActive } = action.payload;
        state[name].isActive = isActive;
    },
    setBlured: (state: any, action: PayloadAction<PayloadFocus>) => {
        const { name, wasFocused } = action.payload;
        if (!wasFocused) return;

        state[name].wasFocused = wasFocused;
    },
};

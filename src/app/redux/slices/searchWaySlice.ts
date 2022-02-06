/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { InputField, InputState, PayloadFocus, SearchedCities } from '../../types';

export type WayStateT = InputState & SearchedCities & { isActive: boolean };

const initialWayState: WayStateT = {
    value: '',
    isValid: undefined,
    error: undefined,
    wasFocused: false,
    cities: [],
    isActive: false,
};

export type CheckoutState = {
    [key: string]: WayStateT;

    wayFrom: WayStateT;
    wayTo: WayStateT;
};

const initialState: CheckoutState = {
    wayFrom: initialWayState,
    wayTo: initialWayState,
};

type SetCitiesPayload = SearchedCities & { inputName: string };

export const searchWaySlice = createSlice({
    name: 'searchWay',
    initialState,
    reducers: {
        setCities: (state, action: PayloadAction<SetCitiesPayload>) => {
            const { cities, inputName } = action.payload;
            state[inputName].cities = cities;

            if (cities.length === 0) {
                state[inputName].error = 'Такого города нет';
                state[inputName].isValid = false;
            }
        },
        changeInput: (state, action: PayloadAction<InputField>) => {
            const { name, value, isValid, error } = action.payload;

            state[name].value = value;
            state[name].isValid = isValid;
            state[name].error = error;
        },
        setBlured: (state, action: PayloadAction<PayloadFocus>) => {
            const { name, wasFocused } = action.payload;
            state[name].wasFocused = wasFocused;
            return state;
        },
        updateForm: (state, action: PayloadAction<CheckoutState>) => action.payload,
        refreshCheckout: () => initialState,
    },
});

export const { setCities, changeInput } = searchWaySlice.actions;

export const selectWayInputs = (state: RootState) => state.searchWay;

export default searchWaySlice.reducer;

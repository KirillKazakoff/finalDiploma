/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
    InputState, PayloadFocus, SearchedCities, InputDefault,
} from '../../types';

export type WayStateT = InputState & SearchedCities & { isActive: boolean };

const initialWayState: WayStateT = {
    value: '',
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
        },
        changeInput: (state, action: PayloadAction<InputDefault>) => {
            const { name, value } = action.payload;
            state[name].value = value;
        },
        setActive: (state, action: PayloadAction<PayloadFocus>) => {
            const { name, isActive } = action.payload;
            state[name].isActive = isActive;
        },
        setBlured: (state, action: PayloadAction<PayloadFocus>) => {
            const { name, wasFocused } = action.payload;
            if (!wasFocused) return;

            state[name].wasFocused = wasFocused;
        },
        updateForm: (state, action: PayloadAction<CheckoutState>) => action.payload,
        refreshCheckout: () => initialState,
    },
});

export const {
    setCities, setActive, setBlured, changeInput,
} = searchWaySlice.actions;

export const selectWayInputs = (state: RootState) => state.searchWay;

export default searchWaySlice.reducer;

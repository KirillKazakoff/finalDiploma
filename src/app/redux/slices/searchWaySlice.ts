/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
    PayloadError,
    InputState,
    PayloadFocus,
    SearchedCities,
    InputDefault,
    Status,
    PayloadStatus,
} from '../../types';

export type WayStateT = InputState & SearchedCities & { status: Status };

const initialWayState: WayStateT = {
    value: '',
    error: '',
    isActive: false,
    wasFocused: false,

    status: 'idle',
    cities: [],
};

export type WaysStateT = {
    [key: string]: WayStateT;

    wayFrom: WayStateT;
    wayTo: WayStateT;
};

const initialState: WaysStateT = {
    wayFrom: initialWayState,
    wayTo: initialWayState,
};

type SetCitiesPayload = SearchedCities & { inputName: string };

export const searchWaySlice = createSlice({
    name: 'searchWay',
    initialState,
    reducers: {
        setInput: (state, action: PayloadAction<InputDefault>) => {
            const { name, value } = action.payload;
            state[name].value = value.trim().toLowerCase();
        },
        setError: (state, action: PayloadAction<PayloadError>) => {
            const { name, error } = action.payload;
            state[name].error = error;
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
        setWayStatus: (state, action: PayloadAction<PayloadStatus>) => {
            const { inputName, status } = action.payload;
            state[inputName].status = status;
        },
        setCities: (state, action: PayloadAction<SetCitiesPayload>) => {
            const { cities, inputName } = action.payload;
            state[inputName].cities = cities;
        },
    },
});

export const {
    setCities, setActive, setBlured, setInput, setWayStatus, setError,
} = searchWaySlice.actions;

export const selectWayInputs = (state: RootState) => state.searchWay;

export default searchWaySlice.reducer;

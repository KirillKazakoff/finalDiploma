/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { SearchedCities, Status, PayloadStatus } from '../../types';
import { initialInput, inputReducers, InputState } from '../reduxFormUtils';

export type WayStateT = InputState & SearchedCities & { status: Status };

const initialWayState: WayStateT = {
    ...initialInput,
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
        ...inputReducers,
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
    setCities,
    setActive,
    setBlured,
    setInput,
    setWayStatus,
    setError,
    setFormError,
} = searchWaySlice.actions;

export const selectWayInputs = (state: RootState) => state.searchWay;

export default searchWaySlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { PayloadSetCities, PayloadFetchWayStatus } from '../../types/typesPayload';
import { initialInput, inputReducers } from './utils/reduxInputUtils';
import { WaysStateT, WayStateT } from '../../types/typesSlices';

const initialWayState: WayStateT = {
    ...initialInput,
    status: 'idle',
    cities: [],
};

const initialState: WaysStateT = {
    wayFrom: { ...initialWayState },
    wayTo: { ...initialWayState },
};

export const searchWaySlice = createSlice({
    name: 'searchWay',
    initialState,
    reducers: {
        ...inputReducers,
        setWayStatus: (state, action: PayloadAction<PayloadFetchWayStatus>) => {
            const { inputName, status } = action.payload;
            state[inputName].status = status;
        },
        setCities: (state, action: PayloadAction<PayloadSetCities>) => {
            const { cities, inputName } = action.payload;
            state[inputName].cities = cities;
        },
        refreshWays: () => initialState,
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
    refreshWays,
} = searchWaySlice.actions;

export const selectWayInputs = (state: RootState) => state.searchWay;

export default searchWaySlice.reducer;

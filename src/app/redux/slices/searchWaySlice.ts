/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { PayloadSetCities, PayloadFetchWayStatus } from '../../types/typesPayload';
import { initialInput, inputReducers } from '../reduxInputUtils';
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

// initialState.wayTo.value = 'санкт-петербург';
// initialState.wayTo.cities = [];
// initialState.wayTo.cities[0] = {
//     name: 'санкт-петербург',
//     _id: '6212d3c15fc56b48553d43bd',
// };

// initialState.wayFrom.value = 'москва';
// initialState.wayFrom.cities = [];
// initialState.wayFrom.cities[0] = {
//     name: 'москва',
//     _id: '6212d3c15fc56b48553d43bc',
// };

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

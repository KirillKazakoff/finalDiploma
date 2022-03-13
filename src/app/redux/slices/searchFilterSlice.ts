/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterStateT } from '../../types/typesSlices';
import type { RootState } from '../store';
import { PayloadFilter } from '../../types/typesPayload';

const initialState: FilterStateT = {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_express: false,

    price_from: 0,
    price_to: 0,
    minTotal: 0,
    maxTotal: 0,

    start_departure_hour_from: 0,
    end_departure_hour_from: 24,
    start_departure_hour_to: 0,
    end_departure_hour_to: 24,

    start_arrival_hour_from: 0,
    end_arrival_hour_from: 24,
    start_arrival_hour_to: 0,
    end_arrival_hour_to: 24,
};

export const searchFilterSlice = createSlice({
    name: 'searchFilter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<PayloadFilter>) => {
            const { name, value } = action.payload;
            state[name] = value;
            console.log(value);
        },
    },
});

export const { setFilter } = searchFilterSlice.actions;

export const selectCost = (state: RootState) => {
    const {
        price_from, price_to, minTotal, maxTotal,
    } = state.searchFilter;

    return {
        price_from,
        price_to,
        minTotal,
        maxTotal,
    };
};

export default searchFilterSlice.reducer;

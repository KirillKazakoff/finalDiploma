/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PayloadPrice, PayloadToggler } from '../../types/typesPayload';
import { FilterStateT } from '../../types/typesSlices';
import type { RootState } from '../store';

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
    end_departure_hour_from: 0,
    start_departure_hour_to: 24,
    end_departure_hour_to: 24,

    start_arrival_hour_from: 0,
    end_arrival_hour_from: 0,
    start_arrival_hour_to: 24,
    end_arrival_hour_to: 24,
};

export const searchFilterSlice = createSlice({
    name: 'searchFilter',
    initialState,
    reducers: {
        setPrice: (state, action: PayloadAction<PayloadPrice>) => {
            const { name, price } = action.payload;
            state.cost[name] = price;
        },
        setToggler: (state, action: PayloadAction<PayloadToggler>) => {
            const { name, isActive } = action.payload;
            state.togglers[name] = isActive;
        },
    },
});

export const { setPrice, setToggler } = searchFilterSlice.actions;

export const selectCost = (state: RootState) => state.searchFilter.cost;

export default searchFilterSlice.reducer;

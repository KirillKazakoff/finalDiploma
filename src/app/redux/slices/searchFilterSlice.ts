/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterStateT, SortTypeT } from '../../types/typesSlices';
import type { RootState } from '../store';
import { PayloadFilter } from '../../types/typesPayload';

const initialState: FilterStateT = {
    aside: {
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
        end_departure_hour_from: 86400000,
        start_departure_hour_to: 0,
        end_departure_hour_to: 86400000,

        start_arrival_hour_from: 0,
        end_arrival_hour_from: 86400000,
        start_arrival_hour_to: 0,
        end_arrival_hour_to: 86400000,
    },
    top: {
        sort: 'date',
        limit: 10,
    },
};

export const searchFilterSlice = createSlice({
    name: 'searchFilter',
    initialState,
    reducers: {
        setAsideParam: (state, action: PayloadAction<PayloadFilter>) => {
            const { name, value } = action.payload;
            state.aside[name] = value;
        },
        setSort: (state, action: PayloadAction<SortTypeT>) => {
            state.top.sort = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.top.limit = action.payload;
        },
    },
});

export const { setAsideParam, setSort, setLimit } = searchFilterSlice.actions;

export const selectCost = (state: RootState) => {
    const {
        price_from, price_to, minTotal, maxTotal,
    } = state.searchFilter.aside;

    return {
        price_from,
        price_to,
        minTotal,
        maxTotal,
    };
};

export const selectSort = (state: RootState) => state.searchFilter.top.sort;
export const selectLimit = (state: RootState) => state.searchFilter.top.limit;
export const selectSearchFilter = (state: RootState) => state.searchFilter;

export default searchFilterSlice.reducer;

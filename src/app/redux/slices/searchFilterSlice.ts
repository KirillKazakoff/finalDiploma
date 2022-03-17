/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterStateT, SortTypeT } from '../../types/typesSlices';
import type { RootState } from '../store';
import { PayloadSliderFilter, PayloadToggler } from '../../types/typesPayload';

const initialState: FilterStateT = {
    aside: {
        togglers: {
            have_first_class: false,
            have_second_class: false,
            have_third_class: false,
            have_fourth_class: false,
            have_wifi: false,
            have_express: false,
        },
        sliders: {
            cost: {
                price_from: 0,
                price_to: 0,
                minTotal: 0,
                maxTotal: 0,
            },
            hourDeparture: {
                start_departure_hour_from: 0,
                end_departure_hour_from: 86400000,
                start_departure_hour_to: 0,
                end_departure_hour_to: 86400000,
            },
            hourArrival: {
                start_arrival_hour_from: 0,
                end_arrival_hour_from: 86400000,
                start_arrival_hour_to: 0,
                end_arrival_hour_to: 86400000,
            },
        },
    },
    top: {
        sort: 'date',
        limit: 5,
        offset: 0,
    },
};

export const searchFilterSlice = createSlice({
    name: 'searchFilter',
    initialState,
    reducers: {
        setToggler: (state, action: PayloadAction<PayloadToggler>) => {
            const { name, value } = action.payload;
            state.aside.togglers[name] = value;
        },
        setCost: (state, action: PayloadAction<PayloadSliderFilter>) => {
            const { name, value } = action.payload;
            state.aside.sliders.cost[name] = value;
        },
        setHourDeparture: (state, action: PayloadAction<PayloadSliderFilter>) => {
            const { name, value } = action.payload;
            state.aside.sliders.hourDeparture[name] = value;
        },
        setHourArrival: (state, action: PayloadAction<PayloadSliderFilter>) => {
            const { name, value } = action.payload;
            state.aside.sliders.hourArrival[name] = value;
        },
        setSort: (state, action: PayloadAction<SortTypeT>) => {
            state.top.sort = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.top.limit = action.payload;
        },
        setOffset: (state, action: PayloadAction<number>) => {
            state.top.offset = action.payload;
        },
    },
});

export const {
    setToggler,
    setCost,
    setHourDeparture,
    setHourArrival,
    setSort,
    setLimit,
    setOffset,
} = searchFilterSlice.actions;

export const selectCost = (state: RootState) => state.searchFilter.aside.sliders.cost;
export const selectSort = (state: RootState) => state.searchFilter.top.sort;
export const selectLimit = (state: RootState) => state.searchFilter.top.limit;
export const selectOffset = (state: RootState) => state.searchFilter.top.offset;

export const selectSearchFilter = (state: RootState) => state.searchFilter;

export default searchFilterSlice.reducer;

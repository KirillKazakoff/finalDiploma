/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PayloadPrice } from '../../types/typesPayload';
import { FilterStateT } from '../../types/typesSlices';

const initialState: FilterStateT = {
    togglers: {
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
        have_wifi: false,
        have_air_conditioning: false,
        have_express: false,
    },
    cost: {
        price_from: 0,
        price_to: 0,
    },
};

export const searchFilterSlice = createSlice({
    name: 'searchFilter',
    initialState,
    reducers: {
        setPrice: (state, action: PayloadAction<PayloadPrice>) => {
            const { name, price } = action.payload;
            state.cost[name] = price;
        },
    },
});

export const { setPrice } = searchFilterSlice.actions;

export default searchFilterSlice.reducer;

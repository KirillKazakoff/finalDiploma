/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const max = 5;
const initialState = {
    rate: 0,
};

export const rateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        setRate: (state, action: PayloadAction<number>) => {
            state.rate = action.payload;
        },
        refreshRate: () => initialState,
    },
});

export const { setRate, refreshRate } = rateSlice.actions;

export const selectRate = (state: RootState) => state.rate.rate;
export const selectInversedRate = (state: RootState) => {
    const { rate } = state.rate;
    return max - rate;
};

export default rateSlice.reducer;

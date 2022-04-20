/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

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
    },
});

export const { setRate } = rateSlice.actions;

export const selectRate = (state: RootState) => state.rate.rate;

export default rateSlice.reducer;

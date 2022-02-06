/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type Status = 'idle' | 'loading' | 'loaded' | 'failed';

export type StatusState = {
    searchWayStatus: Status;
};

const initialState: StatusState = {
    searchWayStatus: 'idle',
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setSearchWayStatus: (state, action: PayloadAction<Status>) => {
            state.searchWayStatus = action.payload;
        },
    },
});

export const { setSearchWayStatus } = statusSlice.actions;

export const selectSearchWayStatus = (state: RootState) => state.statuses.searchWayStatus;

export default statusSlice.reducer;

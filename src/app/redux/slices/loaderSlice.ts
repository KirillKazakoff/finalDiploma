/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import type { RootState } from '../store';

type LoaderStateT = {
    progress: number;
    pageStatus: FetchStatusT;
};

const initialState: LoaderStateT = {
    progress: 0,
    pageStatus: 'idle',
};

export const loaderSlice = createSlice({
    name: 'fetchLoader',
    initialState,
    reducers: {
        setPageStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.pageStatus = action.payload;
        },
        setProgress: (state, action: PayloadAction<number>) => {
            state.progress = action.payload;
        },
    },
});

export const { setPageStatus, setProgress } = loaderSlice.actions;
export const selectProgress = (state: RootState) => state.loader.progress;
export const selectPageStatus = (state: RootState) => state.loader.pageStatus;

export default loaderSlice.reducer;

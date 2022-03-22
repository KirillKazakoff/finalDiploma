/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import type { RootState } from '../store';

type LoaderStateT = {
    progress: number;
    pageStatus: FetchStatusT;
    pageCount: number;
};

const initialState: LoaderStateT = {
    progress: 0,
    pageStatus: 'idle',
    pageCount: 1,
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
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload;
        },
    },
});

export const { setPageStatus, setProgress, setPageCount } = loaderSlice.actions;
export const selectProgress = (state: RootState) => state.loader.progress;
export const selectPageStatus = (state: RootState) => state.loader.pageStatus;
export const selectPageCount = (state: RootState) => state.loader.pageCount;

export default loaderSlice.reducer;

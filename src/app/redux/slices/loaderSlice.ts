/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import type { RootState } from '../store';

type LoaderStateT = {
    progress: number;
    loaderStatus: FetchStatusT;
};

const initialState: LoaderStateT = {
    progress: 0,
    loaderStatus: 'idle',
};

export const loaderSlice = createSlice({
    name: 'fetchLoader',
    initialState,
    reducers: {
        setLoaderStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.loaderStatus = action.payload;
        },
        setProgress: (state, action: PayloadAction<number>) => {
            state.progress = action.payload;
        },
    },
});

export const { setLoaderStatus, setProgress } = loaderSlice.actions;
export const selectProgress = (state: RootState) => state.loader.progress;

export default loaderSlice.reducer;

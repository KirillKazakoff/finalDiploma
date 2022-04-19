/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import { initialInput, inputReducers, InputState } from './utils/reduxInputUtils';
import type { RootState } from '../store';

type SubscribeState = {
    subscribe: InputState;
    status: FetchStatusT;
};

const initialState: SubscribeState = {
    subscribe: {
        ...initialInput,
    },
    status: 'idle',
};

export const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState,
    reducers: {
        ...inputReducers,
        setFetchStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.status = action.payload;
        },
        refreshSubscribe: () => initialState,
    },
});

export const {
    setInput,
    setError,
    setActive,
    setBlured,
    setFetchStatus,
    refreshSubscribe,
} = subscribeSlice.actions;

export const selectSubscribeState = (state: RootState) => state.subscribe.subscribe;

export default subscribeSlice.reducer;

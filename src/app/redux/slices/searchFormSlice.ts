/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FetchStatusT } from '../../types/typesPayload';
import type { RootState } from '../store';

export type FormStatusT = 'error' | 'success' | 'idle';

type FormStateT = {
    isMsgHidden: boolean;
    statusValidity: FormStatusT;
    statusFetch: FetchStatusT;
};

const initialState: FormStateT = {
    isMsgHidden: true,
    statusValidity: 'idle',
    statusFetch: 'idle',
};

export const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: {
        setFetchStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.statusFetch = action.payload;
        },
        setFormStatus: (state, action: PayloadAction<FormStatusT>) => {
            state.statusValidity = action.payload;
        },
        setFormMsgHidden: (state, action: PayloadAction<boolean>) => {
            state.isMsgHidden = action.payload;
        },
    },
});

export const { setFormMsgHidden, setFormStatus, setFetchStatus } = searchFormSlice.actions;
export const selectFormState = (state: RootState) => state.searchForm;
export const selectMsgStatus = (state: RootState) => state.searchForm.isMsgHidden;
export const selectFetchStatus = (state: RootState) => state.searchForm.statusFetch;

export default searchFormSlice.reducer;

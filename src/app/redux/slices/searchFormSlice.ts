/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type FormStatusT = 'error' | 'warning' | 'success' | 'idle';

type FormStateT = {
    msg: string;
    isValidated: boolean;
    status: FormStatusT;
};

const initialState: FormStateT = {
    msg: '',
    isValidated: false,
    status: 'idle',
};

export const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: {
        setFormStatus: (state, action: PayloadAction<FormStatusT>) => {
            state.status = action.payload;
        },
        setFormValidated: (state, action: PayloadAction<boolean>) => {
            state.isValidated = action.payload;
        },
        setFormMsg: (state, action: PayloadAction<string>) => {
            state.msg = action.payload;
        },
    },
});

export const { setFormValidated, setFormMsg, setFormStatus } = searchFormSlice.actions;
export const selectFormState = (state: RootState) => state.searchForm;
export const selectFormStatus = (state: RootState) => state.searchForm.isValidated;

export default searchFormSlice.reducer;

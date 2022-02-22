/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type FormStatusT = 'error' | 'warning' | 'success' | 'idle';

type FormStateT = {
    isMsgHidden: boolean;
    status: FormStatusT;
};

const initialState: FormStateT = {
    isMsgHidden: true,
    status: 'idle',
};

export const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: {
        setFormStatus: (state, action: PayloadAction<FormStatusT>) => {
            state.status = action.payload;
        },
        setFormMsgHidden: (state, action: PayloadAction<boolean>) => {
            state.isMsgHidden = action.payload;
        },
    },
});

export const { setFormMsgHidden, setFormStatus } = searchFormSlice.actions;
export const selectFormState = (state: RootState) => state.searchForm;
export const selectFormStatus = (state: RootState) => state.searchForm.isMsgHidden;

export default searchFormSlice.reducer;

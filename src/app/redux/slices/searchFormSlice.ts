/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type FormStatusT = 'error' | 'success' | 'idle';

type FormStateT = {
    isMsgHidden: boolean;
    statusValidity: FormStatusT;
};

const initialState: FormStateT = {
    isMsgHidden: true,
    statusValidity: 'idle',
};

export const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: {
        setFormStatus: (state, action: PayloadAction<FormStatusT>) => {
            state.statusValidity = action.payload;
        },
        setFormMsgHidden: (state, action: PayloadAction<boolean>) => {
            state.isMsgHidden = action.payload;
        },
    },
});

export const { setFormMsgHidden, setFormStatus } = searchFormSlice.actions;
export const selectFormState = (state: RootState) => state.searchForm;
export const selectMsgStatus = (state: RootState) => state.searchForm.isMsgHidden;
export const selectFormStatus = (state: RootState) => state.searchForm.statusValidity;

export default searchFormSlice.reducer;

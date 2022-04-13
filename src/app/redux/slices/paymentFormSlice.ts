/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { formInitialState, formReducers } from './utils/reduxFormUtils';

const initialState = { ...formInitialState };
export const searchFormSlice = createSlice({
    name: 'paymentForm',
    initialState,
    reducers: { ...formReducers },
});

export const { setFormMsgHidden, setFormStatus } = searchFormSlice.actions;
export const selectFormState = (state: RootState) => state.paymentForm;
export const selectMsgStatus = (state: RootState) => state.paymentForm.isMsgHidden;
export const selectFormStatus = (state: RootState) => state.paymentForm.statusValidity;

export default searchFormSlice.reducer;

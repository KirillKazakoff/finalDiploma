/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { formInitialState, formReducers } from './utils/reduxFormUtils';

const initialState = { ...formInitialState };
export const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: { ...formReducers },
});

export const { setFormMsgHidden, setFormStatus } = searchFormSlice.actions;
export const selectFormState = (state: RootState) => state.searchForm;
export const selectMsgStatus = (state: RootState) => state.searchForm.isMsgHidden;
export const selectFormStatus = (state: RootState) => state.searchForm.statusValidity;

export default searchFormSlice.reducer;

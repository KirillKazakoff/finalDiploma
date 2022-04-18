/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import type { RootState } from '../store';
import { formInitialState, formReducers } from './utils/reduxFormUtils';

const initialState = { ...formInitialState, status: 'idle' as FetchStatusT };
export const paymentFormSlice = createSlice({
    name: 'paymentForm',
    initialState,
    reducers: {
        ...formReducers,
        setFetchStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.status = action.payload;
        },
    },
});

export const { setFormMsgHidden, setFormStatus, setFetchStatus } = paymentFormSlice.actions;
export const selectFormState = (state: RootState) => state.paymentForm;
export const selectMsgStatus = (state: RootState) => state.paymentForm.isMsgHidden;
export const selectFormStatus = (state: RootState) => state.paymentForm.statusValidity;
export const selectFetchStatus = (state: RootState) => state.paymentForm.status;

export default paymentFormSlice.reducer;

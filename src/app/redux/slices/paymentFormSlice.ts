/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FetchStatusT } from '../../types/typesPayload';
import type { RootState } from '../store';
import { formInitialState, formReducers } from './utils/reduxFormUtils';
import { getRandomInt } from '../../components/lib/Common/utils/getRandom';

const initialState = {
    ...formInitialState,
    status: 'idle' as FetchStatusT,
    orderId: getRandomInt(100, 150),
};

export const paymentFormSlice = createSlice({
    name: 'paymentForm',
    initialState,
    reducers: {
        ...formReducers,
        setFetchStatus: (state, action: PayloadAction<FetchStatusT>) => {
            state.status = action.payload;
        },
        refreshPaymentForm: () => initialState,
    },
});

export const {
    setFormMsgHidden, setFormStatus, setFetchStatus, refreshPaymentForm,
} = paymentFormSlice.actions;

export const selectFormState = (state: RootState) => state.paymentForm;
export const selectMsgStatus = (state: RootState) => state.paymentForm.isMsgHidden;
export const selectFormStatus = (state: RootState) => state.paymentForm.statusValidity;
export const selectFetchStatus = (state: RootState) => state.paymentForm.status;
export const selectOrderId = (state: RootState) => state.paymentForm.orderId;

export default paymentFormSlice.reducer;

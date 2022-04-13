import { createSlice } from '@reduxjs/toolkit';
import { formReducers, FormStatusT } from './utils/reduxFormUtils';
import { initialInput, inputReducers } from './utils/reduxInputUtils';
import type { RootState } from '../store';
import { Fields } from '../../types/typesForms';

const fields = {
    last_name: { ...initialInput },
    first_name: { ...initialInput },
    patronymic: { ...initialInput },
    email: { ...initialInput },
    payment_method: { ...initialInput },
};

type StateFieldsT = typeof fields & Fields;

export const initialState = {
    fields: {
        last_name: { ...initialInput },
        first_name: { ...initialInput },
        patronymic: { ...initialInput },
        email: { ...initialInput },
        payment_method: { ...initialInput },
    } as StateFieldsT,

    isMsgHidden: true,
    statusValidity: 'idle' as FormStatusT,
};

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        ...inputReducers,
        ...formReducers,
    },
});

export const {
    setInput,
    setActive,
    setBlured,
    setError,
    setFormError,
    clearField,
    setFormMsgHidden,
    setFormStatus,
} = paymentSlice.actions;

export const selectField = (name: string) => (state: RootState) => {
    return state.payment.fields[name];
};
export const selectMsgHidden = (state: RootState) => state.payment.isMsgHidden;

export default paymentSlice.reducer;

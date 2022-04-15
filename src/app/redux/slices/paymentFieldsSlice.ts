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
    phone: { ...initialInput },

    is_online: { ...initialInput },
    is_cash: { ...initialInput },
};

type StateT = typeof fields & Fields;

export const initialState: StateT = fields;

export const paymentFieldsSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        ...inputReducers,
        ...formReducers,
        refreshPay: () => fields,
    },
});

export const {
    refreshPay,
    setInput,
    setActive,
    setBlured,
    setError,
    setFormError,
    clearField,
    setFormMsgHidden,
    setFormStatus,
} = paymentFieldsSlice.actions;

export const selectField = (name: string) => (state: RootState) => {
    return state.paymentFields[name];
};
export const selectMsgHidden = (state: RootState) => state.paymentFields.isMsgHidden;
export const selectActiveWay = (state: RootState) => {
    const { is_cash, is_online } = state.paymentFields;
    if (is_cash.value === 'true') return 'is_cash';
    if (is_online.value === 'true') return 'is_online';

    return '';
};

export default paymentFieldsSlice.reducer;

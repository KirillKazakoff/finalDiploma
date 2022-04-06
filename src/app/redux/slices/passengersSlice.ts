/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { PayloadField } from '../../types/typesPayload';
import { getInitialState, initForm } from './utils/initPassengersSlice';
import type { RootState } from '../store';
import { inputReducers } from './utils/reduxInputUtils';
import { formReducers } from './utils/reduxFormUtils';

export const passengersSlice = createSlice({
    name: 'passengers',
    initialState: getInitialState(),
    reducers: {
        ...inputReducers,
        ...formReducers,
        initState: () => getInitialState(),
        addForm: (state) => {
            const id = nanoid();
            const form = initForm();
            state[id] = form;
        },
        removeForm: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
        },
        refreshDoctype: (state, action: PayloadAction<string>) => {
            state[action.payload].fields.document_number.value = '';
            state[action.payload].fields.document_number.wasFocused = false;
            state[action.payload].fields.document_series.value = '';
            state[action.payload].fields.document_series.wasFocused = false;
        },
        addField: (state, action: PayloadAction<PayloadField>) => {
            const { id, field } = action.payload;
            state[id].fields[field.name] = field;
        },
    },
});

export const {
    initState,
    addField,
    addForm,
    removeForm,
    refreshDoctype,
    setInput,
    setActive,
    setBlured,
    setError,
    setFormError,
    setFormMsgHidden,
    setFormStatus,
} = passengersSlice.actions;

export const selectDoctype = (id: string) => (state: RootState) => {
    return state.passengers[id].fields.document_type.value;
};
export const selectField = (id: string, name: string) => (state: RootState) => {
    return state.passengers[id].fields[name];
};
export const selectMsgHidden = (id: string) => (state: RootState) => {
    return state.passengers[id].isMsgHidden;
};

export default passengersSlice.reducer;

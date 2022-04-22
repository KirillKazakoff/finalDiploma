/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
        addForm: (state, action: PayloadAction<string>) => {
            const form = initForm();
            state[action.payload] = form;
        },
        removeForm: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
        },
        refreshDoctype: (state, action: PayloadAction<string>) => {
            state[action.payload].fields.document_number.value = '';
            state[action.payload].fields.document_number.error = '';
            state[action.payload].fields.document_number.wasFocused = false;

            state[action.payload].fields.document_series.value = '';
            state[action.payload].fields.document_series.error = '';
            state[action.payload].fields.document_series.wasFocused = false;
        },
        setIsChildForm: (state, action: PayloadAction<string>) => {
            state[action.payload].isChildForm = true;
        },
        refreshPassengers: () => getInitialState(),
    },
});

export const {
    initState,
    addForm,
    removeForm,
    refreshDoctype,
    setInput,
    setActive,
    setBlured,
    setError,
    setFormError,
    clearField,
    setFormMsgHidden,
    setIsChildForm,
    setFormStatus,
    refreshPassengers,
} = passengersSlice.actions;

export const selectPassengersForms = (state: RootState) => state.passengers;
export const selectDoctype = (id: string) => (state: RootState) => {
    return state.passengers[id].fields.document_type.value;
};
export const selectField = (id: string, name: string) => (state: RootState) => {
    return state.passengers[id].fields[name];
};
export const selectMsgHidden = (id: string) => (state: RootState) => {
    return state.passengers[id].isMsgHidden;
};
export const selectIsChildForm = (id: string) => (state: RootState) => {
    return state.passengers[id].isChildForm;
};
export const selectFormsLength = (state: RootState) => {
    return Object.keys(state.passengers).reduce<number>((length, id) => {
        if (!id.includes('childform')) length += 1;
        return length;
    }, 0);
};

export default passengersSlice.reducer;

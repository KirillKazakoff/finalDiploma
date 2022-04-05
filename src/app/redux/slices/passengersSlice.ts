/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { PayloadField, PayloadIdValue } from '../../types/typesPayload';
import { getInitialState, initForm } from './utils/initPassengersSlice';
import type { RootState } from '../store';
import { inputReducers } from './utils/reduxInputUtils';

export const passengersSlice = createSlice({
    name: 'passengers',
    initialState: getInitialState(),
    reducers: {
        ...inputReducers,
        initState: () => getInitialState(),
        addForm: (state) => {
            const id = nanoid();
            const form = initForm();
            state[id] = form;
        },
        removeForm: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
        },
        addField: (state, action: PayloadAction<PayloadField>) => {
            const { id, field } = action.payload;
            state[id][field.name] = field;
        },
    },
});

export const {
    initState,
    addField,
    addForm,
    removeForm,
    setInput,
    setActive,
    setBlured,
    setError,
    setFormError,
} = passengersSlice.actions;

export const selectDoctype = (id: string) => (state: RootState) => {
    return state.passengers[id].document_type.value;
};

export default passengersSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { PayloadField, PayloadInfo } from '../../types/typesPayload';
import { getInitialState, initForm } from './utils/initPassengersSlice';
import type { RootState } from '../store';

export const passengersSlice = createSlice({
    name: 'passengers',
    initialState: getInitialState(),
    reducers: {
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
            state[id][field.fieldName] = field;
        },
        setInput: (state, action: PayloadAction<PayloadInfo>) => {
            const { id, field, value } = action.payload;
            state[id][field].value = value;
        },
    },
});

export const {
    initState, addField, addForm, removeForm, setInput,
} = passengersSlice.actions;

export const selectDoctype = (id: string) => (state: RootState) => {
    return state.passengers[id].document_type.value;
};

export default passengersSlice.reducer;

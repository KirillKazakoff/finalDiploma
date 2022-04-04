/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { initialInput, InputState } from './utils/reduxInputUtils';
import { PassengerFormT } from '../../types/models/modelPerson';

export type PassengersState = {
    [key: string]: PassengerFormT;
};

export const initForm = () => {
    const form = {
        is_adult: { ...initialInput },
        last_name: { ...initialInput },
        first_name: { ...initialInput },
        patronymic: { ...initialInput },
        gender: { ...initialInput },
        birthday: { ...initialInput },
        is_impaired: { ...initialInput },

        document_type: { ...initialInput },
        document_seriya: { ...initialInput },
        document_number: { ...initialInput },
    };

    form.document_type.value = 'Паспорт РФ';
    form.is_adult.value = 'Взрослый';

    return form;
};

const getInitialState = () => {
    const state: PassengersState = {};
    const form = initForm();

    const id = nanoid();
    state[id] = form;
    return state;
};

type PayloadInfoT = {
    id: string;
    field: string;
    prop: string;
    value: string;
};

type PayloadFieldT = {
    id: string;
    field: InputState & { fieldName: string };
};

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
        addField: (state, action: PayloadAction<PayloadFieldT>) => {
            const { id, field } = action.payload;
            state[id][field.fieldName] = field;
        },
        setInput: (state, action: PayloadAction<PayloadInfoT>) => {
            const { id, field, value } = action.payload;
            state[id][field].value = value;
        },
    },
});

export const {
    initState, addField, addForm, removeForm, setInput,
} = passengersSlice.actions;

export default passengersSlice.reducer;

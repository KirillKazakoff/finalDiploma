/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InputDefault } from '../../types';

type DateStateT = {
    value: string;
};

const intialDateState: DateStateT = {
    value: '',
};

type DatesStateT = {
    [key: string]: DateStateT;
    dateTo: DateStateT;
    dateFrom: DateStateT;
};

const initialState: DatesStateT = {
    dateTo: intialDateState,
    dateFrom: intialDateState,
};

export const searchDateSlice = createSlice({
    name: 'searchDate',
    initialState,
    reducers: {
        changeInput: (state, action: PayloadAction<InputDefault>) => {
            const { name, value } = action.payload;
            state[name].value = value.trim().toLowerCase();
        },
    },
});

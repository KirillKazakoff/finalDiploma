/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    InputDefault,
    PayloadActiveDay,
    PayloadDateTime,
    PayloadPickerState,
} from '../../types';

import type {
    DateT,
    PickerStateT,
} from '../../components/lib/DatePicker/utils/timeTypes';

type DateStateT = {
    dateTime: string;
    value: string;
    isPickerActive: boolean;
    activeDate: DateT | null;
    pickerState: PickerStateT | null;
};

const intialDateState: DateStateT = {
    value: '',
    isPickerActive: false,
    activeDate: null,
    dateTime: '',
    pickerState: null,
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
        setDateTime: (state, action: PayloadAction<PayloadDateTime>) => {
            const { name, dateTime } = action.payload;
            state[name].dateTime = dateTime;
        },
        setPickerState: (state, action: PayloadAction<PayloadPickerState>) => {
            const { name, pickerState } = action.payload;
            state[name].pickerState = pickerState;
        },
        setActiveDate: (state, action: PayloadAction<PayloadActiveDay>) => {
            const { name, date } = action.payload;
            state[name].activeDate = date;
        },
        togglePickerActive: (state, action: PayloadAction<string>) => {
            state[action.payload].isPickerActive = !state[action.payload].isPickerActive;
        },
    },
});

export const {
    setActiveDate,
    changeInput,
    togglePickerActive,
    setDateTime,
    setPickerState,
} = searchDateSlice.actions;

export default searchDateSlice.reducer;

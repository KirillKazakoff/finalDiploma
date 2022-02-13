/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DateT } from '../../components/lib/DatePicker/utils/timeTypes';
import { InputDefault, PayloadActiveDay, PayloadDateTime } from '../../types';

type DateStateT = {
    dateTime: string;
    value: string;
    isPickerActive: boolean;
    activeDate: DateT | null;
};

const intialDateState: DateStateT = {
    value: '',
    isPickerActive: false,
    activeDate: null,
    dateTime: '',
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
        setDateTime: (state, action: PayloadAction<PayloadDateTime>) => {
            const { name, dateTime } = action.payload;
            state[name].dateTime = dateTime;
        },
        changeInput: (state, action: PayloadAction<InputDefault>) => {
            const { name, value } = action.payload;
            state[name].value = value.trim().toLowerCase();
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
    setActiveDate, changeInput, togglePickerActive, setDateTime,
} = searchDateSlice.actions;

export default searchDateSlice.reducer;

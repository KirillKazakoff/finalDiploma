/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    PayloadActiveDay,
    PayloadDateTime,
    PayloadPickerState,
} from '../../types/typesPayload';

import type {
    DateT,
    PickerStateT,
} from '../../components/lib/DatePicker/utils/timeTypes';
import { InputState, initialInput, inputReducers } from '../reduxInputUtils';
import type { RootState } from '../store';

export type DateStateT = InputState & {
    dateTime: string;
    activeDate: DateT | null;
    pickerState: PickerStateT | null;
    isPickerActive: boolean;
};

const intialDateState: DateStateT = {
    ...initialInput,

    activeDate: null,
    dateTime: '',
    pickerState: null,
    isPickerActive: false,
};

export type DatesStateT = {
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
        ...inputReducers,
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
            const name = action.payload;
            state[name].isPickerActive = !state[name].isPickerActive;
        },
    },
});

export const {
    setActiveDate,
    setInput,
    togglePickerActive,
    toggleActive,
    setActive,
    setDateTime,
    setPickerState,
    setError,
    setBlured,
    setFormError,
} = searchDateSlice.actions;

export const selectDateInputs = (state: RootState) => state.searchDate;

export default searchDateSlice.reducer;

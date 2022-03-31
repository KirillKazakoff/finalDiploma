/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    PayloadActiveDay,
    PayloadDateTime,
    PayloadPickerState,
} from '../../types/typesPayload';
import { DateStateT, DatesStateT } from '../../types/typesSlices';

import { initialInput, inputReducers } from './utils/reduxInputUtils';
import type { RootState } from '../store';

const intialDateState: DateStateT = {
    ...initialInput,

    activeDate: null,
    dateTime: '',
    pickerState: null,
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
    },
});

export const {
    setActiveDate,
    setInput,
    setActive,
    setDateTime,
    setPickerState,
    setError,
    setBlured,
    setFormError,
} = searchDateSlice.actions;

export const selectDateInputs = (state: RootState) => state.searchDate;

export default searchDateSlice.reducer;

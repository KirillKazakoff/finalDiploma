/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DateT } from '../../components/lib/DatePicker/utils/timeTypes';
import { InputDefault, PayloadActiveDay, PayloadPickerActive } from '../../types';

type DateStateT = {
    value: string;
    isPickerActive: boolean;
    activeDate: DateT | null;
};

const intialDateState: DateStateT = {
    value: '',
    isPickerActive: false,
    activeDate: null,
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
        setActiveDate: (state, action: PayloadAction<PayloadActiveDay>) => {
            const { name, date } = action.payload;
            state[name].activeDate = date;
        },
        togglePickerActive: (state, action: PayloadAction<string>) => {
            state[action.payload].isPickerActive = !state[action.payload].isPickerActive;
        },
    },
});

export const { setActiveDate, changeInput, togglePickerActive } = searchDateSlice.actions;
// export const selectDays = (state: RootState) => state.

export default searchDateSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DateT } from '../../components/lib/DatePicker/utils/timeTypes';
import { InputDefault, PayloadActiveDay } from '../../types';

type DateStateT = {
    value: string;
    activeDay: string;
    date: DateT | null;
};

const intialDateState: DateStateT = {
    value: '',
    activeDay: '',
    date: null,
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
        setActiveDay: (state, action: PayloadAction<PayloadActiveDay>) => {
            const { name, day, date } = action.payload;
            state[name].activeDay = day;
            state[name].date = date;
        },
    },
});

export const { setActiveDay, changeInput } = searchDateSlice.actions;
// export const selectDays = (state: RootState) => state.

export default searchDateSlice.reducer;

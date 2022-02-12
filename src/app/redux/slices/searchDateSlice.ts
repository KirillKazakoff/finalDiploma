/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DateT } from '../../components/lib/DatePicker/utils/timeTypes';
import { InputDefault, PayloadActiveDay } from '../../types';
import type { RootState } from '../store';

type DateStateT = {
    value: string;
    activeDay: string;
};

const intialDateState: DateStateT = {
    value: '',
    activeDay: '',
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
            const { name, day } = action.payload;
            state[name].activeDay = day;
        },
    },
});

export const { setActiveDay, changeInput } = searchDateSlice.actions;
// export const selectDays = (state: RootState) => state.

export default searchDateSlice.reducer;

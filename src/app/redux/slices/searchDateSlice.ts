/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DateT } from '../../components/lib/DatePicker/utils/timeTypes';
import { InputDefault, PayloadActiveDay } from '../../types';
import type { RootState } from '../store';

type DateStateT = {
    value: string;
    activeId: number | null;
    dateInit: any;
    pickerState: {
        days: any;
        date: any;
    } | null;
};

const intialDateState: DateStateT = {
    value: '',
    activeId: null,
    dateInit: null,
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
        setActiveDay: (state, action: PayloadAction<PayloadActiveDay>) => {
            const { name, id } = action.payload;
            state[name].activeId = id;
        },
        setPickerState: (state, action: PayloadAction<any>) => {
            const { name, pickerState } = action.payload;
            state[name].pickerState = pickerState;
        },
    },
});

export const { setPickerState, setActiveDay, changeInput } = searchDateSlice.actions;
// export const selectDays = (state: RootState) => state.

export default searchDateSlice.reducer;

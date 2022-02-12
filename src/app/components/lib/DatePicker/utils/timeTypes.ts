import React from 'react';
import { DayNumbers } from 'luxon';

export type DaysT = {
    pastMonthDays: number[];
    pastDays: number[];
    availableDays: number[];
    newMonthDays: number[];
};

export type DateT = {
    ms: number;
    day: DayNumbers;
    month: string;
    year: number;
};

export type PickerStateT = {
    days: DaysT;
    date: DateT;
} | null;

export type SetFuncT = React.Dispatch<React.SetStateAction<PickerStateT>>;

import React from 'react';
import { DayNumbers } from 'luxon';

export type DaysT = {
    pastMonthDays: number[];
    pastDays: number[];
    availableDays: number[];
    newMonthDays: number[];
};

export type DateT = {
    // ms: number;
    day: string;
    month: string;
    year: number;
};

export type PickerStateT = {
    days: DaysT;
    date: DateT;
};

export type SetFuncT = React.Dispatch<React.SetStateAction<PickerStateT>>;

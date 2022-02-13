import React from 'react';
import { DayNumbers } from 'luxon';

export type DaysT = {
    pastMonthDays: string[];
    pastDays: string[];
    availableDays: string[];
    newMonthDays: string[];
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
};

export type SetFuncT = React.Dispatch<React.SetStateAction<PickerStateT>>;

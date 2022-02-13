import React from 'react';
import type { DateTime } from 'luxon';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import type { OnChangeFieldT } from './forms/typesForms';
import { DateT } from './components/lib/DatePicker/utils/timeTypes';
// InputState
export type InputDefault = {
    name: string;
    value: string;
};

export type InputState = Omit<InputDefault, 'name'> & {
    wasFocused: boolean;
};

export type PayloadFocus = {
    name: string;
    isActive: boolean;
    wasFocused?: boolean;
};

export type PayloadError = {
    name: string;
    error: string;
};

export type Status = 'idle' | 'loading' | 'loaded' | 'failed';
export type PayloadStatus = {
    inputName: string;
    status: Status;
};

type SearchedCity = { _id: string; name: string };

export type SearchedCities = { cities: SearchedCity[]; error?: string };

export type OnChangeT = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type OnFocusT = (e: React.FocusEvent<HTMLInputElement>) => void;

export type InputRefT = React.RefObject<HTMLInputElement>;

export type SetStatusT = ActionCreatorWithPayload<Status, string>;
export type OnChangeNewT = (inputEl: InputRefT, setStatus: SetStatusT) => OnChangeFieldT;

export type SearchWayProps = {
    onChange: any;
    onBlur: OnFocusT;
    onFocus: OnFocusT;
};

// datePickerTypes
export type PayloadActiveDay = {
    name: string;
    date: DateT;
};

export type PayloadPickerActive = {
    name: string;
    isPickerActive: boolean;
};

export type PayloadDateTime = {
    name: string;
    dateTime: string;
};

export type OnDayClickT = (day: string) => () => void;

export type SearchDateDir = { onChange: OnChangeFieldT; dateTime: string };

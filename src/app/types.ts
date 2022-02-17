import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import type { OnChangeFieldT } from './forms/typesForms';
import { DateT, PickerStateT } from './components/lib/DatePicker/utils/timeTypes';
// InputState

export type PayloadFocus = {
    name: string;
    isActive: boolean;
    wasFocused?: boolean;
};

export type PayloadError = {
    name: string;
    error: string;
};

export type PayloadIsFormError = {
    name: string;
    isFormError: boolean;
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
export type OnBlurWayT = (isTipsActive: boolean) => OnFocusT;

export type InputRefT = React.RefObject<HTMLInputElement>;

export type SetStatusT = ActionCreatorWithPayload<Status, string>;
export type SetErrorT = ActionCreatorWithPayload<PayloadError>;
export type SetFormErrorT = ActionCreatorWithPayload<PayloadIsFormError>;

export type OnChangeNewT = (inputEl: InputRefT, setStatus: SetStatusT) => OnChangeFieldT;

export type ValidateInputT = (input: HTMLInputElement) => void;
export type ValidateWayT = (input: HTMLInputElement, cityCheck: string) => void;
export type SearchWayProps = {
    onChange: any;
    onBlur: OnFocusT;
    onFocus: OnFocusT;
    validate: ValidateInputT;
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

export type PayloadPickerState = {
    name: string;
    pickerState: PickerStateT;
};
export type OnDayClickT = (day: string) => () => void;

export type SearchDateDir = { onChange: OnChangeFieldT };

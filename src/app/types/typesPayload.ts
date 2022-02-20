import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { DateT, PickerStateT } from '../components/lib/DatePicker/utils/timeTypes';

export type FetchStatusT = 'idle' | 'loading' | 'loaded' | 'failed';

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

export type PayloadStatus = {
    inputName: string;
    status: FetchStatusT;
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

export type SetStatusT = ActionCreatorWithPayload<FetchStatusT, string>;
export type SetErrorT = ActionCreatorWithPayload<PayloadError>;
export type SetFormErrorT = ActionCreatorWithPayload<PayloadIsFormError>;
export type SetFormMsgHidden = ActionCreatorWithPayload<boolean>;

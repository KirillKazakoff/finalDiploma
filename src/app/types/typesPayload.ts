import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { DateT, PickerStateT } from '../components/lib/DatePicker/utils/timeTypes';
import { SearchedCities } from './typesSearch';
import { FormStatusT } from '../redux/slices/searchFormSlice';

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

export type PayloadFormError = {
    name: string;
    formError: string;
};

// wayTypes
export type PayloadSetCities = SearchedCities & { inputName: string };

export type PayloadFetchWayStatus = {
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

// filterTypes
export type PayloadFilter = {
    name: string;
    value: number | boolean;
};

// export type PayloadPrice = {
//     name: string;
//     price: number;
// };

// export type PayloadToggler = {
//     name: string;
//     isActive: boolean;
// };

export type SetFormStatusT = ActionCreatorWithPayload<FormStatusT>;
export type SetStatusT = ActionCreatorWithPayload<FetchStatusT>;
export type SetErrorT = ActionCreatorWithPayload<PayloadError>;
export type SetFormErrorT = ActionCreatorWithPayload<PayloadFormError>;
export type SetFormMsgHiddenT = ActionCreatorWithPayload<boolean>;

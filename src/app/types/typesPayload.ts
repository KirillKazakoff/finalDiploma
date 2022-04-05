import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { DateT, PickerStateT } from '../components/lib/DatePicker/utils/timeTypes';
import { SearchedCities } from './typesSearch';
import { FormStatusT } from '../redux/slices/searchFormSlice';
import { ActiveCarT, PlaceT } from './typesSlices';
import { CarInfoT } from './models/modelSeats';
import type { InputState } from '../redux/slices/utils/reduxInputUtils';

export type FetchStatusT = 'idle' | 'loading' | 'loaded' | 'failed';

export type PayloadFocus = {
    name: string;
    isActive: boolean;
    wasFocused?: boolean;
    id?: string;
};

export type PayloadError = {
    name: string;
    error: string;
    id?: string;
};

export type PayloadFormError = {
    name: string;
    formError: string;
    id?: string;
};

export type PayloadFormMsg = {
    isHidden: boolean;
    id?: string;
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
export type PayloadSliderFilter = {
    name: string;
    value: number;
};

export type PayloadToggler = {
    name: string;
    value: boolean;
};

// placesTypes
export type PayloadCarType = {
    route: string;
    value: ActiveCarT;
};

export type PayloadExtraPrice = {
    route: string;
    name: string;
    value: number;
};

export type PayloadCar = {
    route: string;
    value: CarInfoT;
};

export type PayloadPlace = {
    route: string;
    place: PlaceT;
};

// passengerTypes
type PayloadWithId = {
    id: string;
    name: string;
};

export type PayloadIdValue = { value: string } & PayloadWithId;
export type PayloadIdError = { error: string } & PayloadWithId;

export type PayloadField = {
    id: string;
    field: InputState & { name: string };
};

export type SetFormStatusT = ActionCreatorWithPayload<FormStatusT>;
export type SetStatusT = ActionCreatorWithPayload<FetchStatusT>;
export type SetErrorT = ActionCreatorWithPayload<PayloadError>;
export type SetFormErrorT = ActionCreatorWithPayload<PayloadFormError>;
export type SetFormMsgHiddenT = ActionCreatorWithPayload<PayloadFormMsg>;
export type SetSliderFilterT = ActionCreatorWithPayload<PayloadSliderFilter>;

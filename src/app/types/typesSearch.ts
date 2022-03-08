import React, { HTMLProps } from 'react';
import type { TimeObjT } from '../components/lib/DatePicker/utils/useTime';
import type { CheckCityMatchT } from '../components/lib/Search/SearchWay/useAbort';
import type { WayStateT, WaysStateT } from '../redux/slices/searchWaySlice';
import type { ValidateInputT, OnChangeFetchT, FormFeedbackT } from './typesForms';
import type { OnClickCheckT } from '../components/lib/Search/SearchDate/useCheckDisabled';
import { DatesStateT } from './typesSlices';

export type SearchedCity = { _id: string; name: string };
export type SearchedCities = { cities: SearchedCity[]; error?: string };

export type SearchSectionProps = { cls?: string };

export type SearchWayProps = {
    onChange: OnChangeFetchT;
    validate: ValidateInputT;
    checkCityMatch: CheckCityMatchT;
} & Omit<HTMLProps<HTMLInputElement>, 'onChange'>;

export type SearchWayInputProps = {
    children: React.ReactNode;
    wayState: WayStateT;
    name: string;
} & SearchWayProps;

export type SearchDateDir = HTMLProps<HTMLInputElement> & {
    validate: ValidateInputT;
    onClickCheck: OnClickCheckT;
};

export type SearchDateInputProps = {
    time: TimeObjT | null;
    name: string;
} & SearchDateDir;

export type SearchFormProps = { cls?: string; children: React.ReactNode };
export type SearchFormFeedbackT = FormFeedbackT & {
    waysState: WaysStateT;
    datesState: DatesStateT;
};

export type TripDateInputProps = {
    name: string;
    time: TimeObjT;
} & HTMLProps<HTMLInputElement>;

export type DatePickerProps = {
    time: TimeObjT;
    name: string;
    isPickerActive: boolean;
    cls: string;
};
export type SetPickerActiveT = React.Dispatch<React.SetStateAction<boolean>>;

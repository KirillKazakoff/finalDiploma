import React, { HTMLProps } from 'react';
import type { TimeObjT } from '../components/lib/DatePicker/utils/useTime';
import type { CheckCityMatchT } from '../components/lib/Search/SearchWay/useAbort';
import type { WayStateT } from '../redux/slices/searchWaySlice';
import type { ValidateInputT } from './typesForms';

export type SearchedCity = { _id: string; name: string };
export type SearchedCities = { cities: SearchedCity[]; error?: string };

export type SearchWayProps = {
    validate: ValidateInputT;
    checkCityMatch: CheckCityMatchT;
} & HTMLProps<HTMLInputElement>;

export type SearchWayInputProps = {
    children: React.ReactNode;
    wayState: WayStateT;
    validate: ValidateInputT;
    checkCityMatch: CheckCityMatchT;
    name: string;
} & HTMLProps<HTMLInputElement>;

export type SearchDateInputProps = {
    time: TimeObjT | null;
    name: string;
} & HTMLProps<HTMLInputElement>;

export type SearchDateDir = HTMLProps<HTMLInputElement>;

import React, { HTMLProps } from 'react';
import type { TimeObjT } from '../components/lib/DatePicker/utils/useTime';
import type { CheckCityMatchT } from '../components/lib/Search/SearchWay/useAbort';
import type { WayStateT } from '../redux/slices/searchWaySlice';
import type { ValidateInputT } from './typesForms';
import { OnChangeFetchT } from './typesForms';

export type SearchedCity = { _id: string; name: string };
export type SearchedCities = { cities: SearchedCity[]; error?: string };

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

export type SearchDateDir = HTMLProps<HTMLInputElement> & { validate: ValidateInputT };

export type SearchDateInputProps = {
    time: TimeObjT | null;
    name: string;
} & SearchDateDir;

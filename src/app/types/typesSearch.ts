import React, { HTMLProps } from 'react';
import type { TimeObjT } from '../components/lib/DatePicker/utils/useTime';
import type { CheckCityMatchT } from '../components/lib/Search/SearchWay/useAbort';
import type { WayStateT } from '../redux/slices/searchWaySlice';
import type { ValidateInputT, OnChangeFetchT } from './typesForms';
import type { OnClickCheckT } from '../components/lib/Search/SearchDate/useCheckDisabled';

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

export type SearchDateDir = HTMLProps<HTMLInputElement> & {
    validate: ValidateInputT;
    onClickCheck: OnClickCheckT;
};

export type SearchDateInputProps = {
    time: TimeObjT | null;
    name: string;
} & SearchDateDir;

export type SearchFormProps = { cls?: string; children: React.ReactNode };

import React, { HTMLProps } from 'react';
import type { WayStateT } from '../redux/slices/searchWaySlice';
import type { OnChangeT, ValidateInputT } from './typesForms';

type SearchedCity = { _id: string; name: string };
export type SearchedCities = { cities: SearchedCity[]; error?: string };

export type SearchWayProps = {
    validate: ValidateInputT;
} & HTMLProps<HTMLInputElement>;

export type SearchWayInputProps = {
    children: React.ReactNode;
    wayState: WayStateT;
    validate: ValidateInputT;
    name: string;
} & HTMLProps<HTMLInputElement>;

export type SearchDateDir = { onChange: OnChangeT };

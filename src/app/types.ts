import React from 'react';
// InputState
export type InputDefault = {
    name: string;
    value: string;
};

export type InputField = InputDefault & {
    isValid: boolean | undefined;
    error: string | undefined;
};

export type InputState = Omit<InputField, 'name'> & {
    wasFocused: boolean;
};

export type PayloadFocus = {
    wasFocused: boolean;
    name: string;
};

type SearchedCity = { _id: string; name: string };

export type SearchedCities = { cities: SearchedCity[] };
export type Status = 'idle' | 'loading' | 'loaded' | 'failed';

export type OnChangeT = (e: React.ChangeEvent<HTMLInputElement>) => void;

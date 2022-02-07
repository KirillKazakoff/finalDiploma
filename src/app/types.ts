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
    name: string;
    isActive: boolean;
    wasFocused?: boolean;
};

type SearchedCity = { _id: string; name: string };

export type SearchedCities = { cities: SearchedCity[]; error?: string };
export type Status = 'idle' | 'loading' | 'loaded' | 'failed';

export type OnChangeT = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type OnChangeNewT = (inputEl: InputRefT) => void;
export type OnBlurT = (e: React.FocusEvent<HTMLInputElement>) => void;
export type InputRefT = React.RefObject<HTMLInputElement>;

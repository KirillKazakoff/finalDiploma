import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import type { PayloadFocus } from './typesPayload';

export type InputDefaultT = {
    name: string;
    value: string;
};

export type OnSubmitFormT = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeT = (e: React.FormEvent<HTMLInputElement>) => void;
export type OnFocusT = (e: React.FocusEvent<HTMLInputElement>) => void;
export type InputRefT = React.RefObject<HTMLInputElement>;

export type UseChangeT = (
    changeInput: ActionCreatorWithPayload<InputDefaultT>
) => OnChangeT;

export type UseSelectT = (
    setActive: ActionCreatorWithPayload<PayloadFocus>,
    setBlured: ActionCreatorWithPayload<PayloadFocus>
) => {
    onFocus: OnFocusT;
    onBlur: OnFocusT;
};

export type ValidateInputT = (input: HTMLInputElement) => void;
export type ValidateWayT = (input: HTMLInputElement, cityCheck: string) => void;

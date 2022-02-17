import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { OnFocusT, PayloadFocus } from '../types';

export type InputDefaultT = {
    name: string;
    value: string;
};

export type OnSubmitFormT = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeFieldT = (e: React.FormEvent<HTMLInputElement>) => void;
export type OnBlurFieldT = (e: React.FocusEvent<HTMLInputElement>) => void;

export type UseChangeT = (
    changeInput: ActionCreatorWithPayload<InputDefaultT>
) => OnChangeFieldT;

export type UseSelectT = (
    setActive: ActionCreatorWithPayload<PayloadFocus>,
    setBlured: ActionCreatorWithPayload<PayloadFocus>
) => {
    onFocus: OnFocusT;
    onBlur: OnFocusT;
};

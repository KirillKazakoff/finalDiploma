import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { OnFocusT, PayloadFocus, InputDefault } from '../types';

export type OnSubmitFormT = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeFieldT = (input: HTMLInputElement) => void;
export type OnBlurFieldT = (e: React.FocusEvent<HTMLInputElement>) => void;

// setStatus: ActionCreatorWithPayload<Status, string>
export type UseFormT = (
    changeInput: ActionCreatorWithPayload<InputDefault>,
    setActive: ActionCreatorWithPayload<PayloadFocus>,
    setBlured: ActionCreatorWithPayload<PayloadFocus>
) => {
    onChange: OnChangeFieldT;
    onFocus: OnFocusT;
    onBlur: OnFocusT;
};

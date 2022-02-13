import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { OnFocusT, PayloadFocus, InputDefault } from '../types';

export type OnSubmitFormT = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeFieldT = (e: React.FormEvent<HTMLInputElement>) => void;
export type OnBlurFieldT = (e: React.FocusEvent<HTMLInputElement>) => void;

export type UseChangeT = (
    changeInput: ActionCreatorWithPayload<InputDefault>
) => OnChangeFieldT;

export type UseSelectT = (
    setActive: ActionCreatorWithPayload<PayloadFocus>,
    setBlured: ActionCreatorWithPayload<PayloadFocus>
) => {
    onFocus: OnFocusT;
    onBlur: OnFocusT;
};

// export type UseFormT = (
//     changeInput: ActionCreatorWithPayload<InputDefault>,
//     setActive: ActionCreatorWithPayload<PayloadFocus>,
//     setBlured: ActionCreatorWithPayload<PayloadFocus>
// ) => {
//     onChange: OnChangeFieldT;
//     onFocus: OnFocusT;
//     onBlur: OnFocusT;
// };

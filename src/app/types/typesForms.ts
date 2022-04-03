/* eslint-disable no-unused-vars */
import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import type { PayloadFocus, SetFormMsgHiddenT, SetFormStatusT } from './typesPayload';
import { FormStatusT } from '../redux/slices/searchFormSlice';

export type InputDefaultT = {
    name: string;
    value: string;
};

export type DynamicInputDefaultT = { id: string } & InputDefaultT;

export type OnSubmitFormT = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeT = (e: React.FormEvent<HTMLInputElement>) => void;
export type OnChangeFetchT = (aborter: AbortController) => OnChangeT;
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

export type FormPropsT = {
    cls?: string;
    children: React.ReactNode;
    onSubmitForm: OnSubmitFormT;
};

export type FormFeedbackPropsT = {
    setFormStatus: SetFormStatusT;
    errors: string[];
    msg: string;
    children: React.ReactNode;
    isMsgHidden: boolean;
};

export type FormFeedbackT = { children: React.ReactNode; isMsgHidden: boolean };

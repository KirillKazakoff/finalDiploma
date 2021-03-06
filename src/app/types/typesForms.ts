import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import type {
    PayloadBlur,
    PayloadFocus,
    SetFormMsgHiddenT,
    SetFormStatusT,
} from './typesPayload';
import type { InputState } from '../redux/slices/utils/reduxInputUtils';

export type InputDefaultT = {
    name: string;
    value: string;
    id?: string;
};

export type DynamicInputDefaultT = { id: string } & InputDefaultT;

export type OnSubmitFormT = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeT = (e: React.FormEvent<HTMLInputElement>) => void;
export type OnChangeFetchT = (aborter: AbortController) => OnChangeT;
export type OnFocusT = (e: React.FocusEvent<HTMLInputElement>) => void;
export type InputRefT = React.RefObject<HTMLInputElement>;

export type UseChangeT = (
    changeInput: ActionCreatorWithPayload<InputDefaultT>,
    formId?: string
) => OnChangeT;

export type UseSelectT = (
    setActive: ActionCreatorWithPayload<PayloadFocus>,
    setBlured: ActionCreatorWithPayload<PayloadBlur>,
    formId?: string
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
    setFormMsgHidden: SetFormMsgHiddenT;
    setFormStatus: SetFormStatusT;
    errors: string[];
    msg: string;
    children: React.ReactNode;
    isMsgHidden: boolean;
    formId?: string;
    cls?: string;
};

export type FormFeedbackT = { children: React.ReactNode; isMsgHidden: boolean };
export type Fields = {
    [key: string]: InputState;
};

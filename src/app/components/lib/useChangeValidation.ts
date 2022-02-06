/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { useAppDispatch } from '../../redux/reduxHooks';
import { changeInput } from '../../redux/slices/searchWaySlice';
import { InputField } from '../../types';

export type OnSubmitForm = (e: React.FormEvent<HTMLFormElement>) => void;
export type OnChangeField = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type OnBlurField = (e: React.FocusEvent<HTMLInputElement>) => void;

export default function useChangeValidation() {
    const dispatch = useAppDispatch();

    const getValidity = (input: HTMLInputElement) => {
        const validity = input.validity as ValidityState & {
            [key: string]: boolean;
        };

        if (validity.valid) {
            return {
                isValid: true,
                error: undefined,
            };
        }

        let error;
        for (const key in validity) {
            if (validity[key]) {
                error = key;
            }
        }

        return {
            isValid: false,
            error,
        };
    };

    const onChange: OnChangeField = (e) => {
        const validity = getValidity(e.currentTarget);
        const changedInput: InputField = {
            name: e.currentTarget.name,
            value: e.currentTarget.value,
            ...validity,
        };

        console.log(changedInput);
        dispatch(changeInput(changedInput));
    };

    return [onChange];
}

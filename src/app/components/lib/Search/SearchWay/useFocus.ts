import React from 'react';
import { useAppDispatch } from '../../../../redux/reduxHooks';
import { setActive, setBlured } from '../../../../redux/slices/searchWaySlice';
import { OnBlurT, PayloadFocus } from '../../../../types';

type OnFocusT = (e: React.FocusEvent<HTMLInputElement>) => void;

export default function useSearchFocus() {
    const dispatch = useAppDispatch();

    const onFocus: OnFocusT = (e) => {
        const input: PayloadFocus = {
            name: e.currentTarget.name,
            isActive: true,
        };
        dispatch(setActive(input));
    };

    const onBlur: OnBlurT = (e) => {
        const { name } = e.currentTarget;
        const input: PayloadFocus = {
            name,
            isActive: false,
            wasFocused: true,
        };

        // predict bluring
        setTimeout(() => {
            dispatch(setActive(input));
            dispatch(setBlured(input));
        }, 130);
    };

    return [onBlur, onFocus];
}

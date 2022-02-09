import React from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import { Status } from '../../../../types';
import errorMessages from '../errorMsg';
import Feedback from './Feedback';
import validateForm from '../../../../forms/validateForm';
import validateCity from './validateCity';

type SearchWayProps = {
    wayState: WayStateT;
    input: HTMLInputElement | null;
    status: Status;
};

export default function SearchWayFeedback({ wayState, input, status }: SearchWayProps) {
    const { wasFocused, cities } = wayState;
    const city = cities[0]?.name;

    if (!input || !wasFocused) return null;

    if (city === input.value) return <Feedback type='valid'>Done</Feedback>;
    if (status !== 'loaded') return null;

    validateCity(input, city);
    const { error } = validateForm(input);

    if (!error) return <Feedback type='valid'>Done</Feedback>;

    const errMsg = errorMessages[input.name][error];
    return <Feedback type='invalid'>{errMsg}</Feedback>;
}

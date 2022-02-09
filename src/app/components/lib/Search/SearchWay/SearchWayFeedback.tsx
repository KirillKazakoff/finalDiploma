import React from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import { Status } from '../../../../types';
import errorMessages from '../errorMsg';
import Feedback from './Feedback';

type SearchWayProps = { wayState: WayStateT; name: string; status: Status };

export default function SearchWayFeedback({ wayState, name, status }: SearchWayProps) {
    const { error, wasFocused } = wayState;

    if (!wasFocused) return null;
    if (status !== 'loaded') return null;
    if (!error) return <Feedback type='valid'>Done</Feedback>;

    const errMsg = errorMessages[name][error];
    return <Feedback type='invalid'>{errMsg}</Feedback>;
}

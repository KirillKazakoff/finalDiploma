import React from 'react';
import { WayStateT } from '../../../../redux/slices/searchWaySlice';
import errorMessages from '../errorMsg';
import Feedback from './Feedback';

type SearchWayProps = { wayState: WayStateT; name: string };

export default function SearchWayFeedback({ wayState, name }: SearchWayProps) {
    const { error, wasFocused } = wayState;

    if (!wasFocused) return null;
    if (!error) return <Feedback type='valid'>Done</Feedback>;

    const errMsg = errorMessages[name][error];
    return <Feedback type='invalid'>{errMsg}</Feedback>;
}

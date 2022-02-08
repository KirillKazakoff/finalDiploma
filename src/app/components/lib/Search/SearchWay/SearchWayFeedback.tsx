import React from 'react';
import errorMessages from '../errorMsg';
import Feedback from './Feedback';

type SearchWayProps = { error: string | undefined; name: string };

export default function SearchWayFeedback({ error, name }: SearchWayProps) {
    console.log(error);
    if (!error) return <Feedback type='valid'>Great</Feedback>;

    const errMsg = errorMessages[name][error];

    return <Feedback type='invalid'>{errMsg}</Feedback>;
}

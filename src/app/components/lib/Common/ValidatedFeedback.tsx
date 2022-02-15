import React from 'react';
import Feedback from './Feedback';
import { useAppSelector } from '../../../redux/reduxHooks';

type FeedbackProps = { input: HTMLInputElement };

export default function ValidatedFeedback({ input }: FeedbackProps) {
    const error = useAppSelector((state) => state.searchWay[input.name].error);

    return <Feedback type='invalid'>{error}</Feedback>;
}

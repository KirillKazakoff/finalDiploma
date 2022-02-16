import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';

type FeedbackProps = { input: HTMLInputElement; type: string };

export default function Feedback({ input, type }: FeedbackProps) {
    const error = useAppSelector((state) => state.searchWay[input.name].error);

    if (!error) return null;
    return <div className={`feedback feedback-${type}`}>{error}</div>;
}

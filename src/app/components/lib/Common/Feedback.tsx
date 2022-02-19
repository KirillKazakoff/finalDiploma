import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFormStatus } from '../../../redux/slices/searchFormSlice';

type FeedbackProps = { type: string; error: string; wasFocused: boolean };

export default function Feedback({ type, error, wasFocused }: FeedbackProps) {
    const isFormValidated = useAppSelector(selectFormStatus);
    if (!error) return null;
    if (!wasFocused && !isFormValidated) return null;

    return <div className={`feedback feedback-${type}`}>{error}</div>;
}

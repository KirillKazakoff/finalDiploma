import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';

type FeedbackProps = { input: HTMLInputElement };

export default function Feedback({ input }: FeedbackProps) {
    const error = useAppSelector((state) => state.searchWay[input.name].error);

    if (!error) return null;
    return <div className='feedback feedback-invalid'>{error}</div>;
}

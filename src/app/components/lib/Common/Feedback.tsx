import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectMsgStatus } from '../../../redux/slices/searchFormSlice';

type FeedbackProps = { error: string; formError: string; wasFocused: boolean };

export default function Feedback({ error, formError, wasFocused }: FeedbackProps) {
    const isFormHidden = useAppSelector(selectMsgStatus);
    if (!error && !formError) return null;
    if (!wasFocused && isFormHidden && !formError) return null;

    return <div className='feedback feedback-error'>{formError || error}</div>;
}

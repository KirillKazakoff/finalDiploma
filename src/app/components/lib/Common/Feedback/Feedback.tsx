import React from 'react';
import './feedback.css';

type FeedbackProps = {
    error: string;
    wasFocused: boolean;
    formError?: string;
    isFormMsgHidden?: boolean;
};

export default function Feedback(props: FeedbackProps) {
    const {
        error, formError, wasFocused, isFormMsgHidden,
    } = props;

    if (!error && !formError) return null;
    if (!wasFocused && isFormMsgHidden && !formError) return null;

    return (
        <div className='feedback'>
            <div className='feedback-arrow' />
            <span className='feedback-content'>{formError || error}</span>
        </div>
    );
}

Feedback.defaultProps = {
    isFormMsgHidden: true,
    formError: '',
};

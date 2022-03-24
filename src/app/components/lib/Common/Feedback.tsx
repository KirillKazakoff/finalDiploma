import React from 'react';

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

    return <div className='feedback feedback-error'>{formError || error}</div>;
}

Feedback.defaultProps = {
    isFormMsgHidden: true,
    formError: '',
};

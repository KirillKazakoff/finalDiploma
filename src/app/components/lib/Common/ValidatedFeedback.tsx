import React from 'react';
import validateInput from '../../../forms/validateInput';
import errorMessages from '../Search/errorMsg';
import Feedback from './Feedback';

type FeedbackProps = { input: HTMLInputElement; validMsg?: string };

export default function ValidatedFeedback({ input, validMsg }: FeedbackProps) {
    const { error } = validateInput(input);
    if (!error) {
        if (validMsg) return <Feedback type='valid'>{validMsg}</Feedback>;
        return null;
    }

    let errMsg = errorMessages[input.name][error];
    console.log(errMsg);
    if (errMsg === 'customError') errMsg = input.validationMessage;
    return <Feedback type='invalid'>{errMsg}</Feedback>;
}

ValidatedFeedback.defaultProps = {
    validMsg: '',
};

import React from 'react';
import validateInput from '../../../forms/validateInput';
import errorMessages from '../Search/errorMsg';
import Feedback from './Feedback';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setError } from '../../../redux/slices/searchWaySlice';

type FeedbackProps = { input: HTMLInputElement };

export default function ValidatedFeedback({ input }: FeedbackProps) {
    // const dispatch = useAppDispatch();
    // const { error } = validateInput(input);
    // if (!error) return null;

    // let errMsg = errorMessages[input.name][error];
    // if (errMsg === 'customError') errMsg = input.validationMessage;

    // if (!errMsg) return null;
    // dispatch(setError({ name: input.name, error: errMsg }));
    const error = useAppSelector((state) => state.searchWay[input.name].error);
    return <Feedback type='invalid'>{error}</Feedback>;
}

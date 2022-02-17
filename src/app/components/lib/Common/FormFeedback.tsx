import React from 'react';
import {
    selectFormState,
    setFormStatus,
    setFormValidated,
} from '../../../redux/slices/searchFormSlice';
import SvgCrossMark from '../Svg/Actions/SvgCrossMark';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';

export default function FormFeedback() {
    const { msg, status, isValidated } = useAppSelector(selectFormState);

    const dispatch = useAppDispatch();
    const className = `form-feedback form-feedback-${status}`;

    const onClick = () => {
        dispatch(setFormStatus('idle'));
        dispatch(setFormValidated(false));
    };

    if (!isValidated) return null;

    return (
        <div className={className}>
            <button
                className='form-feedback-collapse form-feedback-collapse-error'
                onClick={onClick}
                type='button'
            >
                <SvgCrossMark filter='filter-error' />
            </button>
            <span className='form-feedback-desc form-feedback-desc-error'>{msg}</span>
        </div>
    );
}

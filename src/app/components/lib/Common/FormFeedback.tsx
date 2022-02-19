import React from 'react';
import { selectFormState, setFormValidated } from '../../../redux/slices/searchFormSlice';
import SvgCrossMark from '../Svg/Actions/SvgCrossMark';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';

type Props = { errors: string[]; msg: string };

export default function FormFeedback({ errors, msg }: Props) {
    const dispatch = useAppDispatch();
    let feedback = msg;

    if (feedback === 'Успех') {
        errors.forEach((error) => {
            if (error) feedback = error;
        });
    }

    const status = feedback === 'Успех' ? 'success' : 'error';
    const className = `form-feedback form-feedback-${status}`;

    const onClick = () => {
        dispatch(setFormValidated(false));
    };

    const { isValidated } = useAppSelector(selectFormState);
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
            <span className='form-feedback-desc form-feedback-desc-error'>
                {feedback}
            </span>
        </div>
    );
}

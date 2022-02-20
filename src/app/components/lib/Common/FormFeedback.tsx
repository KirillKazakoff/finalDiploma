import React from 'react';
import { selectFormState } from '../../../redux/slices/searchFormSlice';
import { useAppSelector } from '../../../redux/reduxHooks';
import FormFeedbackCollapse from './FormFeedbackCollapse';

type Props = { errors: string[]; msg: string; children: React.ReactNode };

export default function FormFeedback({ errors, msg, children }: Props) {
    let feedback = msg;

    if (feedback === 'Успех') {
        errors.forEach((error) => {
            if (error) feedback = error;
        });
    }

    const status = feedback === 'Успех' ? 'success' : 'error';
    const className = `form-feedback form-feedback-${status}`;

    const { isMsgHidden } = useAppSelector(selectFormState);
    if (isMsgHidden) return null;

    return (
        <div className={className}>
            <FormFeedbackCollapse status={status} />
            <span className='form-feedback-desc form-feedback-desc-error'>
                {feedback}
            </span>
            {children}
        </div>
    );
}

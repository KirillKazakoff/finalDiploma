import React from 'react';
import { selectFormState } from '../../../redux/slices/searchFormSlice';
import { useAppSelector } from '../../../redux/reduxHooks';
import FormFeedbackCollapse from './FormFeedbackCollapse';
import FormFeedbackDesc from './FormFeedbackDesc';

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
    if (isMsgHidden) return <div className='form-feedback'>{children}</div>;

    return (
        <div className={className}>
            <FormFeedbackCollapse status={status} />
            <FormFeedbackDesc status={status}>{feedback}</FormFeedbackDesc>
            {status === 'success' ? children : null}
        </div>
    );
}

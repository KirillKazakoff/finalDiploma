import React from 'react';
import FormFeedbackCollapse from './FormFeedbackCollapse';
import FormFeedbackDesc from './FormFeedbackDesc';
import { SetFormStatusT } from '../../../types/typesPayload';

type FormFeedbackPropsT = {
    setFormStatus: SetFormStatusT;
    errors: string[];
    msg: string;
    children: React.ReactNode;
    isMsgHidden: boolean;
};

export default function FormFeedback(props: FormFeedbackPropsT) {
    const {
        errors, msg, isMsgHidden, children, setFormStatus,
    } = props;
    let feedback = msg;

    if (feedback === 'Успех') {
        errors.forEach((error) => {
            if (error) feedback = error;
        });
    }

    const status = feedback === 'Успех' ? 'success' : 'error';
    const className = `form-feedback form-feedback-${status}`;
    setFormStatus(status);

    if (isMsgHidden) return <div className='form-feedback'>{children}</div>;

    return (
        <div className={className}>
            <FormFeedbackCollapse status={status} />
            <FormFeedbackDesc status={status}>{feedback}</FormFeedbackDesc>
            {status === 'success' ? children : null}
        </div>
    );
}

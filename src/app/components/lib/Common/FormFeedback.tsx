import React, { useEffect } from 'react';
import FormFeedbackCollapse from './FormFeedbackCollapse';
import FormFeedbackDesc from './FormFeedbackDesc';
import { useAppDispatch } from '../../../redux/reduxHooks';
import type { FormFeedbackPropsT } from '../../../types/typesForms';

export default function FormFeedback(props: FormFeedbackPropsT) {
    const dispatch = useAppDispatch();
    const {
        errors,
        msg,
        isMsgHidden,
        children,
        setFormStatus,
        formId,
        setFormMsgHidden,
    } = props;
    let feedback = msg;

    if (feedback === 'Успех') {
        errors.forEach((error) => {
            if (error) feedback = error;
        });
    }

    const status = feedback === 'Успех' ? 'success' : 'error';
    const className = `form-feedback form-feedback-${status}`;

    useEffect(() => {
        dispatch(setFormStatus({ status, id: formId }));
    }, [status]);

    if (isMsgHidden) return <div className='form-feedback'>{children}</div>;

    const onClickCollapse = () => {
        dispatch(setFormMsgHidden({ isHidden: true, id: formId }));
    };
    return (
        <div className={className}>
            <FormFeedbackCollapse status={status} onClick={onClickCollapse} />
            <FormFeedbackDesc status={status}>{feedback}</FormFeedbackDesc>
            {status === 'success' ? children : null}
        </div>
    );
}

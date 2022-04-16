import React from 'react';

import { searchMessages } from '../Search/messages';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFields } from '../../../redux/slices/paymentFieldsSlice';
import { reduceErrors } from '../../../form/reduceErrors';
import {
    selectMsgStatus,
    setFormMsgHidden,
    setFormStatus,
} from '../../../redux/slices/paymentFormSlice';
import FormFeedback from '../Common/Form/FormFeedback';

type Props = { children: React.ReactNode };

export default function PaymentFormFeedback({ children }: Props) {
    const form = useAppSelector(selectFields);
    const isMsgHidden = useAppSelector(selectMsgStatus);

    const errors = reduceErrors(Object.values(form));
    const { success } = searchMessages;

    return (
        <FormFeedback
            msg={success}
            errors={errors}
            setFormStatus={setFormStatus}
            setFormMsgHidden={setFormMsgHidden}
            isMsgHidden={isMsgHidden}
            cls='payment-form-feedback'
        >
            {children}
        </FormFeedback>
    );
}

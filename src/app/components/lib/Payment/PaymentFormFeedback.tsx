import React from 'react';
import FormFeedback from '../Common/FormFeedback';
import { searchMessages } from '../Search/messages';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFields } from '../../../redux/slices/paymentFieldsSlice';
import { reduceErrors } from '../../../form/reduceErrors';
import {
    selectMsgStatus,
    setFormMsgHidden,
    setFormStatus,
} from '../../../redux/slices/paymentFormSlice';

type Props = { children: React.ReactNode };

export default function PaymentFormFeedback({ children }: Props) {
    const form = useAppSelector(selectFields);
    const isMsgHidden = useAppSelector(selectMsgStatus);

    const errors = reduceErrors(Object.values(form));
    const { success } = searchMessages;
    console.log(isMsgHidden);

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

import React from 'react';
import useCheckStatus from '../../../form/useCheckStatus';
import { useAppSelector } from '../../../redux/reduxHooks';
import {
    selectFormStatus,
    setFormMsgHidden,
} from '../../../redux/slices/paymentFormSlice';

import SubmitBtn from '../Common/BtnNextRouteNew';
import Form from '../Common/Form';
import PaymentFormFeedback from './PaymentFormFeedback';
import PaymentPersonalData from './PaymentPersonalData/PaymentPersonalData';
import PaymentPersonalWay from './PaymentPersonalWay/PaymentPersonalWay';

export default function PaymentForm() {
    const statusValidity = useAppSelector(selectFormStatus);

    const checkStatus = useCheckStatus(setFormMsgHidden, statusValidity);
    const onSubmit = () => {
        if (!checkStatus()) return false;
        return true;
    };

    return (
        <Form onSubmitForm={onSubmit} cls=''>
            <div className='payment-form-content shadowed'>
                <PaymentPersonalData />

                <PaymentPersonalWay />
            </div>
            <PaymentFormFeedback>
                <SubmitBtn cls='payment'>Купить билеты</SubmitBtn>
            </PaymentFormFeedback>
        </Form>
    );
}

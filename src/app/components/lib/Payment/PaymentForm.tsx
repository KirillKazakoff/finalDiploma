import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/reduxHooks';
import {
    selectFormStatus,
    setFormMsgHidden,
} from '../../../redux/slices/paymentFormSlice';

import BtnNextRoute from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';
import useCheckStatus from '../Common/Form/useCheckStatus';
import PaymentFormFeedback from './PaymentFormFeedback';
import PaymentPersonalData from './PaymentPersonalData/PaymentPersonalData';
import PaymentPersonalWay from './PaymentPersonalWay/PaymentPersonalWay';

export default function PaymentForm() {
    const statusValidity = useAppSelector(selectFormStatus);
    const navigate = useNavigate();

    const checkStatus = useCheckStatus(setFormMsgHidden, statusValidity);
    const onSubmit = () => {
        if (!checkStatus()) return;
        navigate('/check');
    };

    return (
        <Form onSubmitForm={onSubmit}>
            <div className='payment-form-content shadowed'>
                <PaymentPersonalData />

                <PaymentPersonalWay />
            </div>
            <PaymentFormFeedback>
                <BtnNextRoute cls='payment'>Купить билеты</BtnNextRoute>
            </PaymentFormFeedback>
        </Form>
    );
}

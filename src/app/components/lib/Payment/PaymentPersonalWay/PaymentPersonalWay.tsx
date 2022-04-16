import React, { useState } from 'react';
import PaymentHeader from '../PaymentHeader';
import PayCheck from './PayCheck';
import PayWays from './PayWays';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectActiveWay } from '../../../../redux/slices/paymentFieldsSlice';
import { useSetError } from '../../../../form/useSetError';
import PayCheck2 from './PayCheck2';

export default function PaymentPersonalWay() {
    const initActiveWay = useAppSelector(selectActiveWay);

    return (
        <div className='passsenger-personal-wrapper passenger-personal-wrapper-way'>
            <PaymentHeader>Способ оплаты</PaymentHeader>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-online'>
                    <PayCheck2 desc='Онлайн' name='is_online' />
                </div>
                <PayWays />
            </section>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-cash'>
                    <PayCheck2 desc='Наличными' name='is_cash' />
                </div>
            </section>
        </div>
    );
}

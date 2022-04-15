import React, { useState } from 'react';
import PaymentHeader from '../PaymentHeader';
import PayCheck from './PayCheck';
import PayWays from './PayWays';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectActiveWay } from '../../../../redux/slices/paymentFieldsSlice';

export default function PaymentPersonalWay() {
    const initActiveWay = useAppSelector(selectActiveWay);
    const [activeWay, setActiveWay] = useState(initActiveWay);

    return (
        <div className='passsenger-personal-wrapper passenger-personal-wrapper-way'>
            <PaymentHeader>Способ оплаты</PaymentHeader>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-online'>
                    <PayCheck
                        activeWay={activeWay}
                        setActiveWay={setActiveWay}
                        desc='Онлайн'
                        name='is_online'
                    />
                </div>
                <PayWays />
            </section>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-cash'>
                    <PayCheck
                        activeWay={activeWay}
                        setActiveWay={setActiveWay}
                        desc='Наличными'
                        name='is_cash'
                    />
                </div>
            </section>
        </div>
    );
}

import React, { useEffect } from 'react';
import PaymentHeader from '../PaymentHeader';
import PayWays from './PayWays';
import PayCheck from './PayCheck';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectField, setError } from '../../../../redux/slices/paymentFieldsSlice';
import { useSetError } from '../../../../form/useSetError';

export default function PaymentPersonalWay() {
    const name = 'payment_method';
    const methodState = useAppSelector(selectField(name));
    const setErrorH = useSetError(name, setError);

    useEffect(() => {
        let error = '';
        if (!methodState.value) {
            error = 'Не выбран способ оплаты';
        }

        setErrorH(error);
    }, [methodState.value]);

    return (
        <div className='passsenger-personal-wrapper passenger-personal-wrapper-way'>
            <PaymentHeader>Способ оплаты</PaymentHeader>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-online'>
                    <PayCheck desc='Онлайн' name='online' />
                </div>
                <PayWays />
            </section>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-cash'>
                    <PayCheck desc='Наличными' name='cash' />
                </div>
            </section>
        </div>
    );
}

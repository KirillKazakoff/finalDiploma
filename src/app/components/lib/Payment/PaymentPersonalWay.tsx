import React from 'react';
import PaymentHeader from './PaymentHeader';

export default function PaymentPersonalWay() {
    return (
        <div className='passsenger-personal-wrapper passenger-personal-wrapper-way'>
            <PaymentHeader>Способ оплаты</PaymentHeader>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-online'>
                    <div className='passenger-form-col passenger-form-col-checkbox filter-secondary'>
                        <span className='checkbox is-online-checkbox' />
                        <span className='payment-checkbox-desc'>Онлайн</span>
                    </div>
                </div>
                <div className='passenger-form-row passenger-payment-ways'>
                    <div className='passenger-form-col passenger-form-col-payment-way'>
                        <span className='payment-way-desc'>Банковской картой</span>
                    </div>
                    <div className='passenger-form-col passenger-form-col-payment-way'>
                        <span className='payment-way-desc'>PayPal</span>
                    </div>
                    <div className='passenger-form-col passenger-form-col-payment-way'>
                        <span className='payment-way-desc'>Visa QIWI Wallet</span>
                    </div>
                </div>
            </section>
            <section className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-payment-is-cash'>
                    <div className='passenger-form-col passenger-form-col-checkbox filter-main'>
                        <span className='checkbox is-cash-checkbox'>
                            <img src='./svg/actions/tick.svg' alt='tick' />
                        </span>
                        <span className='payment-checkbox-desc'>Наличными</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

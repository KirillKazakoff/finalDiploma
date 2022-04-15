import React from 'react';

export default function PayWays() {
    return (
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
    );
}

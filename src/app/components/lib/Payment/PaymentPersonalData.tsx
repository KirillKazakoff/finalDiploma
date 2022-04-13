import React from 'react';
import FullNamePayInput from './FullNamePayInput';
import PaymentHeader from './PaymentHeader';

export default function PaymentPersonalData() {
    return (
        <div className='passenger-personal-wrapper'>
            <PaymentHeader>Персональные данные</PaymentHeader>
            <div className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-fullname'>
                    <div className='passenger-form-col'>
                        <FullNamePayInput name='last_name' label='Фамилия' />
                    </div>
                    <div className='passenger-form-col'>
                        <label className='passenger-input-label label-payment'>Имя</label>
                        <div className='input-wrapper passenger-input-wrapper'>
                            <input className='input' />
                        </div>
                    </div>
                    <div className='passenger-form-col'>
                        <label className='passenger-input-label label-payment'>
                            Отчество
                        </label>
                        <div className='input-wrapper passenger-input-wrapper'>
                            <input className='input' />
                        </div>
                    </div>
                </div>
                <div className='passenger-form-row passenger-phone'>
                    <div className='passenger-form-col' style={{ width: '40%' }}>
                        <label
                            className='passenger-input-label label-payment'
                            htmlFor='phone'
                        >
                            Контактный телефон
                        </label>
                        <div className='input-wrapper passenger-input-wrapper'>
                            <input
                                id='phone'
                                className='input input-number input-phone'
                                placeholder='+7 ___ ___ __ __'
                            />
                        </div>
                    </div>
                </div>
                <div className='passenger-form-row passenger-mail'>
                    <div className='passenger-form-col' style={{ width: '40%' }}>
                        <label
                            className='passenger-input-label label-payment'
                            htmlFor='mail'
                        >
                            E-mail
                        </label>
                        <div className='input-wrapper passenger-input-wrapper'>
                            <input
                                id='mail'
                                className='input'
                                placeholder='inbox@gmail.ru'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import PayFullNameInput from './PayFullNameInput';
import PaymentHeader from './PaymentHeader';
import PhonePayInput from './PhonePayInput';

export default function PaymentPersonalData() {
    return (
        <div className='passenger-personal-wrapper'>
            <PaymentHeader>Персональные данные</PaymentHeader>
            <div className='passenger-form-section framed-passenger-section passenger-payment'>
                <div className='passenger-form-row passenger-fullname'>
                    <PayFullNameInput name='last_name' label='Фамилия' />
                    <PayFullNameInput name='first_name' label='Имя' />
                    <PayFullNameInput name='patronymic' label='Отчество' />
                </div>
                <div className='passenger-form-row passenger-phone'>
                    <PhonePayInput label='Контактный телефон' />
                </div>
                <div className='passenger-form-row passenger-mail'>
                    <div className='passenger-form-col'>
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

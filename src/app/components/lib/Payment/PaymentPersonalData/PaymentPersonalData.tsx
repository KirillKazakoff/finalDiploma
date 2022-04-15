import React from 'react';
import PayFullNameInput from './PayFullNameInput';
import PaymentHeader from '../PaymentHeader';
import PayPhoneInput from './PayPhoneInput';
import PayMailInput from './PayMailInput';

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
                    <PayPhoneInput label='Контактный телефон' />
                </div>
                <div className='passenger-form-row passenger-mail'>
                    <PayMailInput label='E-mail' />
                </div>
            </div>
        </div>
    );
}

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputWrapper from '../Common/InputWrapper';

export default function FooterSubscription() {
    return (
        <div className='subscription'>
            <h2 className='footer-subtitle subscription-title'>Подписка</h2>
            <form className='form subscribe-form'>
                <label htmlFor='subscribe' className='label label-subscription'>
                    Будьте в курсе событий
                </label>

                <div className='subscribe-form-row'>
                    <InputWrapper cls='subscription-input-wrapper'>
                        <input
                            id='subscribe'
                            className='input subscription-input'
                            type='mail'
                            placeholder='e-mail'
                        />
                    </InputWrapper>

                    <button className='btn btn-main btn-subscribe' type='button'>
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
}

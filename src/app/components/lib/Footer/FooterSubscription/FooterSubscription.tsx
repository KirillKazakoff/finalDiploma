/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import InputWrapper from '../../Common/InputWrapper';
import useChange from '../../../../form/useChange';
import {
    setActive,
    setBlured,
    setError,
    setInput,
} from '../../../../redux/slices/subscribeSlice';
import useValidateInput from '../../../../form/useValidateInput';
import useSelect from '../../../../form/useSelect';

export default function FooterSubscription() {
    const onChange = useChange(setInput);
    const validate = useValidateInput(setError);
    const { onBlur, onFocus } = useSelect(setActive, setBlured);

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
                            autoComplete='off'
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

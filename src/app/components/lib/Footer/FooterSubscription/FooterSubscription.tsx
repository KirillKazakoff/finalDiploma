/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import useChange from '../../../../form/useChange';
import {
    setActive,
    setBlured,
    setError,
    setInput,
} from '../../../../redux/slices/subscribeSlice';
import useValidateInput from '../../../../form/useValidateInput';
import useSelect from '../../../../form/useSelect';
import SubscriptionInput from './SubscriptionInput';
import SubscribeFormBtn from './SubscribeFormBtn';

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
                    <SubscriptionInput
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        validate={validate}
                    />

                    <SubscribeFormBtn />
                </div>
            </form>
        </div>
    );
}

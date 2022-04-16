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
import { useAppSelector, useAppDispatch } from '../../../../redux/reduxHooks';
import { fetchSubscribe } from '../../../../fetch/api/fetchSubscribe';
import Form from '../../Common/Form/Form';

export default function FooterSubscription() {
    const dispatch = useAppDispatch();
    const onChange = useChange(setInput);
    const validate = useValidateInput(setError);
    const { onBlur, onFocus } = useSelect(setActive, setBlured);
    const { subscribe } = useAppSelector((state) => state.subscribe);
    const { error, value } = subscribe;

    const onSubmit = () => {
        if (error) return;
        const settings = { email: value };
        if (!value) {
            dispatch(setBlured({ name: 'subscribe', isActive: true, wasFocused: true }));
            dispatch(setError({ name: 'subscribe', error: 'Введите поле' }));
            return;
        }
        dispatch(fetchSubscribe(settings));
    };

    return (
        <div className="subscription">
            <h2 className="footer-subtitle subscription-title">Подписка</h2>

            <Form cls="subscribe-form" onSubmitForm={onSubmit}>
                <label htmlFor="subscribe" className="label label-subscription">
                    Будьте в курсе событий
                </label>

                <div className="subscribe-form-row">
                    <SubscriptionInput
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        validate={validate}
                    />
                    <SubscribeFormBtn />
                </div>
            </Form>
        </div>
    );
}

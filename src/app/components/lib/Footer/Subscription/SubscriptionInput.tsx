import React, { HTMLProps, useEffect, useRef } from 'react';
import InputWrapper from '../../Common/InputWrapper';
import { ValidateInputT } from '../../../../types/typesForms';
import { useAppSelector } from '../../../../redux/reduxHooks';
import Feedback from '../../Common/Feedback';
import SpinLoader from '../../Common/SpinLoader';

type Props = { validate: ValidateInputT } & HTMLProps<HTMLInputElement>;

export default function SubscriptionInput(props: Props) {
    const {
        validate, onChange, onBlur, onFocus,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);
    const { status, subscribe } = useAppSelector((state) => state.subscribe);
    const { value, error, wasFocused } = subscribe;

    useEffect(() => {
        if (!inputEl.current) return;
        const input = inputEl.current;

        validate(input);
    }, [value]);

    return (
        <InputWrapper cls='subscription-input-wrapper'>
            <input
                ref={inputEl}
                name='subscribe'
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                value={value}
                id='subscribe'
                className='input subscription-input'
                type='email'
                placeholder='e-mail'
                autoComplete='off'
                required
            />
            {status === 'loading' ? <SpinLoader cls='subscribe-loader' /> : null}
            <Feedback error={error} wasFocused={wasFocused} />
        </InputWrapper>
    );
}

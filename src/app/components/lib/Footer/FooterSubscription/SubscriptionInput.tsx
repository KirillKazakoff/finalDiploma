import React, { HTMLProps, useEffect, useRef } from 'react';
import InputWrapper from '../../Common/InputWrapper';
import { ValidateInputT } from '../../../../types/typesForms';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectSubscribeState } from '../../../../redux/slices/subscribeSlice';
import Feedback from '../../Common/Feedback';

type Props = { validate: ValidateInputT } & HTMLProps<HTMLInputElement>;

export default function SubscriptionInput(props: Props) {
    const {
        validate, onChange, onBlur, onFocus,
    } = props;

    const inputEl = useRef<HTMLInputElement>(null);
    const subState = useAppSelector(selectSubscribeState);
    const { value, error, wasFocused } = subState;

    console.log(error);
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
            />
            <Feedback error={error} wasFocused={wasFocused} />
        </InputWrapper>
    );
}

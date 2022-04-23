import React, { useEffect } from 'react';
import PaymentInput from '../PaymentInput/PaymentInput';
import PaymentLabel from '../PaymentInput/PaymentLabel';
import { useInitPayInput } from '../useInitPayInput';
import { usePhone } from './usePhone';

type Props = { label: string };

export default function PhonePayInput({ label }: Props) {
    const name = 'phone';
    const { validate, ref, inputState } = useInitPayInput(name);

    const { onChange, onKeyDown, onKeyUp } = usePhone(inputState.value);

    useEffect(() => {
        const input = ref.current;
        validate(input);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputState.value, ref]);

    return (
        <div className='passenger-form-col passenger-form-col-40'>
            <PaymentLabel name={name}>{label}</PaymentLabel>
            <PaymentInput
                onKeyUp={onKeyUp}
                onKeyDown={onKeyDown}
                name={name}
                parrentRef={ref}
                state={inputState}
                pattern='^(\+7|8)\s\d{3}\s\d{3}\s\d{2}\s\d{2}\s*$'
                onChange={onChange}
                required
                placeholder='+7 ___   ___   __   __'
                autoComplete='off'
            />
        </div>
    );
}

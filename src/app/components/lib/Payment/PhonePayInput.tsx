import React, { useEffect } from 'react';
import PassengerInput from './PaymentInput/PaymentInput';
import { useInitPayInput } from './useInitPayInput';

type Props = { label: string };

export default function PhonePayInput({ label }: Props) {
    const name = 'phone';
    const { validate, ref, inputState } = useInitPayInput(name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validate(input);
    }, [inputState.value]);

    return (
        <div className='passenger-form-col passenger-form-col-40'>
            <label className='passenger-input-label label-payment' htmlFor={name}>
                {label}
            </label>
            <PassengerInput
                name={name}
                parrentRef={ref}
                state={inputState}
                pattern='^[а-я А-Я]+$'
                required
                placeholder='+7 ___   ___   __   __'
            />
        </div>
    );
}

import React, { useEffect } from 'react';
import PaymentInput from './PaymentInput/PaymentInput';
import PaymentLabel from './PaymentInput/PaymentLabel';
import { useInitPayInput } from './useInitPayInput';
import { changePhone, usePhone } from './usePhone';

type Props = { label: string };

export default function PhonePayInput({ label }: Props) {
    const name = 'phone';
    const { validate, ref, inputState } = useInitPayInput(name);

    // const copy = usePhone(inputState);
    const copyState = { ...inputState };
    changePhone(copyState);
    // console.log(copy.value);

    useEffect(() => {
        const input = ref.current;
        validate(input);
    }, [inputState.value]);

    return (
        <div className='passenger-form-col passenger-form-col-40'>
            <PaymentLabel name={name}>{label}</PaymentLabel>
            <PaymentInput
                name={name}
                parrentRef={ref}
                state={copyState}
                pattern='^(\+7|8)\s\d{3}\s\d{3}\s\d{2}\s\d{2}$'
                // type='phone'
                required
                placeholder='+7 ___   ___   __   __'
                autoComplete='off'
            />
        </div>
    );
}

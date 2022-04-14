import React, { useEffect } from 'react';
import PaymentInput from './PaymentInput/PaymentInput';
import { useInitPayInput } from './useInitPayInput';
import PaymentLabel from './PaymentInput/PaymentLabel';

type Props = { label: string };

export default function PayMailInput({ label }: Props) {
    const name = 'email';
    const { validate, ref, inputState } = useInitPayInput(name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validate(input);
    }, [inputState.value]);

    return (
        <div className='passenger-form-col passenger-form-col-40'>
            <PaymentLabel name={name}>{label}</PaymentLabel>
            <PaymentInput
                required
                name={name}
                parrentRef={ref}
                state={inputState}
                type='email'
                placeholder='inbox@gmail.ru'
            />
        </div>
    );
}

import React, { useEffect } from 'react';
import PaymentInput from '../PaymentInput/PaymentInput';
import PaymentLabel from '../PaymentInput/PaymentLabel';
import { useInitPayInput } from '../useInitPayInput';
import useChange from '../../../../form/useChange';
import { setInput } from '../../../../redux/slices/paymentFieldsSlice';

type Props = { label: string; name: string };

export default function PayFullNameInput({ label, name }: Props) {
    const { validate, ref, inputState } = useInitPayInput(name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validate(input);
    }, [inputState.value]);

    const onChange = useChange(setInput);
    return (
        <div className='passenger-form-col'>
            <PaymentLabel name={name}>{label}</PaymentLabel>
            <PaymentInput
                name={name}
                parrentRef={ref}
                state={inputState}
                pattern='^[а-я А-Я]+$'
                required
                onChange={onChange}
            />
        </div>
    );
}

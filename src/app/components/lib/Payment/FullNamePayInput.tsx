import React, { useEffect } from 'react';
import PaymentInput from './PaymentInput';
import { useInitPayInput } from './useInitPayInput';

type Props = { label: string; name: string };
export default function FullNamePayInput(props: Props) {
    const { label, name } = props;
    const { validate, ref, inputState } = useInitPayInput(name);

    // useEffect(() => {
    //     if (!ref.current) return;
    //     const input = ref.current;

    //     validate(input);
    // }, [inputState.value]);

    return (
        <div className='passenger-form-col'>
            <label className='passenger-input-label label-payment' htmlFor={name}>
                {label}
            </label>
            <PaymentInput
                name={name}
                parrentRef={ref}
                state={inputState}
                pattern='^[а-я А-Я]+$'
                required
            />
        </div>
    );
}

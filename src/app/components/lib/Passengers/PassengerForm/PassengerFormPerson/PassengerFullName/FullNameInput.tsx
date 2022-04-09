import React, { useEffect } from 'react';
import PassengerInput from '../../PassengerInput';
import { useInitInput } from '../../../useInitInput';

type Props = { label: string; name: string; id: string };
export default function FullNameInput(props: Props) {
    const { label, name, id } = props;
    const { validate, ref, inputState } = useInitInput(id, name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validate(input);
    }, [inputState.value]);

    return (
        <div className='passenger-form-col'>
            <label className='passenger-input-label' htmlFor={name}>
                {label}
            </label>
            <PassengerInput
                name={name}
                id={id}
                parrentRef={ref}
                state={inputState}
                pattern='^[а-я А-Я]+$'
                required
            />
        </div>
    );
}

import React, { useEffect } from 'react';
import { IdProp } from '../../../../../types/typesPassengers';
import PassengerInput from '../../PassengerInput';
import { validateDatePerson } from '../validateDatePerson';
import { useInitInput } from '../../useInitInput';

export default function PassengerBioBirthdate({ id }: IdProp) {
    const name = 'birthday';
    const { ref, inputState, validate } = useInitInput(id, name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validateDatePerson(input);
        validate(input);
    }, [inputState.value]);

    return (
        <div className='passenger-form-col passenger-form-col-birthdate'>
            <label className='passenger-input-label' htmlFor='birthday'>
                Дата рождения
            </label>
            <PassengerInput
                state={inputState}
                name={name}
                id={id}
                required
                parrentRef={ref}
                pattern='^\d{2}\/\d{2}\/\d{2}$'
            />
        </div>
    );
}

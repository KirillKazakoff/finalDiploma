import React, { useEffect } from 'react';
import PassengerInput from '../../PassengerInput';
import { validateDatePerson } from '../validateDatePerson';
import { useAppSelector } from '../../../../../../redux/reduxHooks';
import {
    selectField,
    selectIsChildForm,
} from '../../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../../types/typesPassengers';
import { useInitInput } from '../../../useInitInput';

export default function PassengerBioBirthdate({ id }: IdProp) {
    const name = 'birthday';
    const ageState = useAppSelector(selectField(id, 'is_adult'));
    const isChildForm = useAppSelector(selectIsChildForm(id));
    const { ref, inputState, validate } = useInitInput(id, name);

    useEffect(() => {
        if (!ref.current) return;
        const input = ref.current;

        validateDatePerson(input, ageState.value, isChildForm);
        validate(input);
    }, [inputState.value, ageState.value]);

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
                pattern='^\d{2}\/\d{2}\/\d{4}$'
            />
        </div>
    );
}

import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import FormSelect from '../../Common/FormSelect';
import { useSetInput } from '../useSetInput';
import { selectField } from '../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../types/typesPassengers';

export default function PassengerFormAge({ id }: IdProp) {
    const name = 'is_adult';
    const ageState = useAppSelector(selectField(id, name));
    const setInput = useSetInput(id, name);

    const onClick = (value: string) => () => setInput(value);

    const options = ['Взрослый', 'Детский'].map((age) => (
        <li
            className='option option-doctype' key={age}
            onClick={onClick(age)}
        >
            {age}
        </li>
    ));

    return (
        <div className='passenger-form-row'>
            <div className='passenger-form-col'>
                <FormSelect selected={ageState.value} cls='age'>
                    {options}
                </FormSelect>
            </div>
        </div>
    );
}

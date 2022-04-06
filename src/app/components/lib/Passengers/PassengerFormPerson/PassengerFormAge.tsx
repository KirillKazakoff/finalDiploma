import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import FormSelect from '../../Common/FormSelect';
import { useSetInput } from '../useSetInput';

type Props = { id: string };

export default function PassengerFormAge({ id }: Props) {
    const name = 'is_adult';
    const ageState = useAppSelector((state) => state.passengers[id].fields.is_adult);
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

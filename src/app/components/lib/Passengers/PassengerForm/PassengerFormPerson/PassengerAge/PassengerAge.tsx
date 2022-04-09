import React from 'react';
import { IdProp } from '../../../../../../types/typesPassengers';
import FormSelect from '../../../../Common/FormSelect';
import { useSetInput } from '../../../useSetInput';
import { useGetAgeOptions } from './useGetAgeOptions';

export default function PassengerAge({ id }: IdProp) {
    const name = 'is_adult';
    const setInput = useSetInput(id, name);

    const getOptions = useGetAgeOptions(id);
    const { options, selected } = getOptions();

    const onClick = (value: string) => () => setInput(value);

    const optionsList = options.map((age) => (
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
                <FormSelect selected={selected} cls='age'>
                    {optionsList}
                </FormSelect>
            </div>
        </div>
    );
}

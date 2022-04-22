import React from 'react';
import { useSetInput } from '../../../useSetInput';
// import { useSetInput } from '../../../../../../form/useSetInput';
// import { setInput } from '../../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../../types/typesPassengers';
import FormSelect from '../../../../Common/FormSelect/FormSelect';
import { useGetAgeOptions } from './useGetAgeOptions';

export default function PassengerAge({ id }: IdProp) {
    const name = 'is_adult';
    // const setInputH = useSetInput(name, setInput, id);
    const setInput = useSetInput(name, id);

    const getOptions = useGetAgeOptions(id);
    const { options, selected } = getOptions();

    const onClick = (value: string) => () => setInput(value);

    const optionsList = options.map((age) => (
        <li
            className='option option-age' key={age}
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

import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import { setInput } from '../../../../redux/slices/passengersSlice';
import FormSelect from '../../Common/FormSelect';

type Props = { id: string };

export default function PassengerFormAge({ id }: Props) {
    const dispatch = useAppDispatch();
    const ageState = useAppSelector((state) => state.passengers[id].is_adult);

    const onClick = (value: string) => () => {
        const dispatchObj = {
            id,
            name: 'is_adult',
            value,
        };

        dispatch(setInput(dispatchObj));
    };

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

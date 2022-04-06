/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppSelector } from '../../../../../redux/reduxHooks';
import { IdProp } from '../../../../../types/typesPassengers';
import Checkbox from '../../../Common/Checkbox';
import { useSetInput } from '../../useSetInput';
import { selectField } from '../../../../../redux/slices/passengersSlice';

export default function PassengerCheckAddChild({ id }: IdProp) {
    const name = 'include_children_seat';
    const setInput = useSetInput(id, name);
    const ageState = useAppSelector(selectField(id, name));

    const isActive = ageState.value === 'true';
    const onClick = () => {
        const value = ageState.value === 'true' ? 'false' : 'true';
        setInput(value);
    };

    return (
        <div className='passenger-form-col passenger-form-col-checkbox'>
            <div className='click-wrapper' onClick={onClick}>
                <Checkbox init={isActive} desc='добавить ребенка без занятия места' />
            </div>
        </div>
    );
}

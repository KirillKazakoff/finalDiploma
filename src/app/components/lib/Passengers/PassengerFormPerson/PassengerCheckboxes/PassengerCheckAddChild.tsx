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
    const seatState = useAppSelector(selectField(id, name));
    const isAdultState = useAppSelector(selectField(id, 'is_adult'));

    const isActive = seatState.value === 'true';
    const disabled = isAdultState.value === 'Детский';

    const onClick = () => {
        if (disabled) return;

        const value = isActive ? 'false' : 'true';
        setInput(value);
    };

    return (
        <div className='passenger-form-col passenger-form-col-checkbox'>
            <div className='click-wrapper' onClick={onClick}>
                <Checkbox
                    disabled={disabled}
                    init={isActive}
                    desc='добавить ребенка без занятия места'
                />
            </div>
        </div>
    );
}

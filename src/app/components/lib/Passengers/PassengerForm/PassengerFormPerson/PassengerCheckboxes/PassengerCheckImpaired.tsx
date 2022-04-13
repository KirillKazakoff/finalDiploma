/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppSelector } from '../../../../../../redux/reduxHooks';
import { selectField } from '../../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../../types/typesPassengers';
import Checkbox from '../../../../Common/Checkbox/Checkbox';
import { useSetInput } from '../../../useSetInput';

export default function PassengerCheckImpaired({ id }: IdProp) {
    const name = 'is_impaired';
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
                <Checkbox isActive={isActive} desc='ограниченная подвижность' />
            </div>
        </div>
    );
}

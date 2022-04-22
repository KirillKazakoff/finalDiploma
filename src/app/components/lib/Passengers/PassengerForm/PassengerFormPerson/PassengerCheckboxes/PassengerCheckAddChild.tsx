/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/reduxHooks';
import {
    addForm,
    removeForm,
    selectField,
    setIsChildForm,
} from '../../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../../types/typesPassengers';
import Checkbox from '../../../../Common/Checkbox/Checkbox';
import { useSetInput } from '../../../useSetInput';

export default function PassengerCheckAddChild({ id }: IdProp) {
    const name = 'include_children_seat';
    const dispatch = useAppDispatch();
    const setInput = useSetInput(name, id);
    const seatState = useAppSelector(selectField(id, name));
    const isAdultState = useAppSelector(selectField(id, 'is_adult'));

    const isActive = seatState.value === 'true';
    const disabled = isAdultState.value === 'Детский';
    const childFormId = `${id}childform`;

    const onClick = () => {
        if (disabled) return;

        let value;
        if (isActive) {
            value = 'false';
            dispatch(removeForm(childFormId));
        } else {
            value = 'true';
            dispatch(addForm(childFormId));
            dispatch(setIsChildForm(childFormId));
        }
        setInput(value);
    };

    return (
        <div className='passenger-form-col passenger-form-col-checkbox'>
            <div className='click-wrapper' onClick={onClick}>
                <Checkbox
                    disabled={disabled}
                    isActive={isActive}
                    desc='добавить ребенка без занятия места'
                />
            </div>
        </div>
    );
}

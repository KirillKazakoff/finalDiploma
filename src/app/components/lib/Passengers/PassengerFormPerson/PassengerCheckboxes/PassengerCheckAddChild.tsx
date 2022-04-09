/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../redux/reduxHooks';
import { IdProp } from '../../../../../types/typesPassengers';
import Checkbox from '../../../Common/Checkbox';
import { useSetInput } from '../../useSetInput';
import {
    addForm,
    removeForm,
    selectField,
    setIsChildForm,
} from '../../../../../redux/slices/passengersSlice';

export default function PassengerCheckAddChild({ id }: IdProp) {
    const name = 'include_children_seat';
    const dispatch = useAppDispatch();
    const setInput = useSetInput(id, name);
    const seatState = useAppSelector(selectField(id, name));
    const isAdultState = useAppSelector(selectField(id, 'is_adult'));

    const isActive = seatState.value === 'true';
    const disabled = isAdultState.value === 'Детский';
    const childFormId = `${id}childform`;

    console.log(id);
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

    // useEffect(() => {
    //     setInput(seatState.value);
    // }, [seatState.value]);

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

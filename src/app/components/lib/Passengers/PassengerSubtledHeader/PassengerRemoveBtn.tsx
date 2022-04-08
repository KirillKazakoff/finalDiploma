import React from 'react';
import { IdProp } from '../../../../types/typesPassengers';
import { useAppDispatch, useAppSelector } from '../../../../redux/reduxHooks';
import {
    addForm,
    removeForm,
    selectFormsLength,
} from '../../../../redux/slices/passengersSlice';

export default function PassengerRemoveBtn({ id }: IdProp) {
    const dispatch = useAppDispatch();
    const formsLength = useAppSelector(selectFormsLength);

    const onClick = () => {
        dispatch(removeForm(id));
        if (formsLength === 1) {
            dispatch(addForm(id));
        }
    };

    return (
        <button
            className='passengers-remove' type='button'
            onClick={onClick}
        >
            <img src='./svg/actions/cross-mark.svg' alt='passenger-remove' />
        </button>
    );
}

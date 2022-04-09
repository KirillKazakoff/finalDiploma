import React from 'react';
import { IdProp } from '../../../../../types/typesPassengers';
import { useAppDispatch } from '../../../../../redux/reduxHooks';
import { useRemoveForm } from './useRemoveForm';
import { removeForm } from '../../../../../redux/slices/passengersSlice';

export default function PassengerRemoveBtn({ id }: IdProp) {
    const dispatch = useAppDispatch();
    const onRemove = useRemoveForm(id);

    const onClick = () => {
        dispatch(removeForm(id));
        onRemove();
    };

    return (
        <button
            className='passenger-remove' type='button'
            onClick={onClick}
        >
            <img
                src='./svg/actions/cross-mark.svg'
                width='100%'
                height='100%'
                alt='passenger-remove'
            />
        </button>
    );
}

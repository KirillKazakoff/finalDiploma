import React from 'react';
import { useAppDispatch } from '../../../../../redux/reduxHooks';
import { removeForm } from '../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../types/typesPassengers';
import { useRemoveForm } from './useRemoveForm';

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

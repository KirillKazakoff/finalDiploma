import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../redux/reduxHooks';
import { removeForm } from '../../../../../redux/slices/passengersSlice';
import { IdProp } from '../../../../../types/typesPassengers';
import { setThunk } from '../../../Common/Info/alertThunk';
import { messagesAlert } from '../../../Common/Info/messagesInfo';
import { useRemoveForm } from './useRemoveForm';
import { selectAlert } from '../../../../../redux/slices/alertSlice';

const { passengerRemove: msg } = messagesAlert;

export default function PassengerRemoveBtn({ id }: IdProp) {
    const dispatch = useAppDispatch();
    const onRemove = useRemoveForm(id);
    const { isActive, status } = useAppSelector(selectAlert);

    const onClickHandler = () => {
        dispatch(removeForm(id));
        onRemove();
    };

    const onClick = () => {
        dispatch(setThunk(msg, onClickHandler));
    };

    useEffect(() => {
        if (isActive) {
            onClick();
        }
    }, [status]);

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

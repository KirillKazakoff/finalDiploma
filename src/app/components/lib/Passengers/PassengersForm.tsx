/* eslint-disable no-param-reassign */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import BtnNextRouteNew from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';

import { useCheckPassengers } from './useCheckPassengers';

export default function PassengersForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { msg, statusValidity } = useCheckPassengers();

    const onSubmit = () => {
        if (msg) {
            dispatch(setInfo({ msg, status: 'error' }));
            return;
        }
        navigate('/pas-places');
    };

    return (
        <Form cls='passengers-total-form' onSubmitForm={onSubmit}>
            <BtnNextRouteNew disabled={statusValidity !== 'success'}>
                Далее
            </BtnNextRouteNew>
        </Form>
    );
}

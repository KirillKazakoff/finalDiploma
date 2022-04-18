/* eslint-disable no-param-reassign */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { FormStatusT } from '../../../redux/slices/utils/reduxFormUtils';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import BtnNextRouteNew from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';
import { messagesError } from '../Common/Info/messagesInfo';
import { getAges } from './checkAges';

const {
    childrenOverwhelm, noPassengers, fullfillForm, notEqualPlaces, emptyPrevRoute,
} = messagesError;

export default function PassengersForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const forms = useAppSelector((state) => state.passengers);
    const { biggest } = useAppSelector(selectPlacesLength);

    const statusValidity = Object.values(forms).reduce<FormStatusT>((status, form) => {
        if (form.statusValidity !== 'success') status = 'error';
        return status;
    }, 'success');

    const onSubmit = () => {
        let msg;
        const { microPeople, adults } = getAges(forms);
        if (microPeople / adults > 3) msg = childrenOverwhelm;

        const total = microPeople + adults;
        if (statusValidity !== 'success') msg = fullfillForm;
        if (biggest !== total) msg = notEqualPlaces(biggest);
        if (total === 0) msg = noPassengers;
        if (biggest === 0) msg = emptyPrevRoute;

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

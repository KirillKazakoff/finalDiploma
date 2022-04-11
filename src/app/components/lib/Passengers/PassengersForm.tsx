/* eslint-disable no-param-reassign */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { FormStatusT } from '../../../redux/slices/utils/reduxFormUtils';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import BtnNextRouteNew from '../Common/BtnNextRouteNew';
import Form from '../Common/Form';
import { messagesInfo } from '../Common/Info/messagesInfo';
import { getAges } from './checkAges';
import PassengersNextSection from './PassengersNextSection';

const {
    childrenOverwhelm, tooManyPlaces, noPassengers, fullfillForm,
} = messagesInfo;

export default function PassengersForm() {
    const dispatch = useAppDispatch();
    const forms = useAppSelector((state) => state.passengers);
    const placesAmount = useAppSelector(selectPlacesLength);
    const navigate = useNavigate();

    const statusValidity = Object.values(forms).reduce<FormStatusT>((status, form) => {
        if (form.statusValidity !== 'success') status = 'error';
        return status;
    }, 'success');

    const onSubmit = () => {
        let msg;
        const { microPeople, adults } = getAges(forms);
        if (microPeople / adults > 3) msg = childrenOverwhelm;

        const total = microPeople + adults;
        if (placesAmount < total) msg = tooManyPlaces;
        if (total === 0) msg = noPassengers;
        if (statusValidity !== 'success') msg = fullfillForm;

        if (msg) {
            dispatch(setInfo({ msg, status: 'error' }));
            return;
        }
        navigate('/pas-places');
    };

    return (
        <Form cls='passengers-total-form' onSubmitForm={onSubmit}>
            <BtnNextRouteNew />
        </Form>
    );
}

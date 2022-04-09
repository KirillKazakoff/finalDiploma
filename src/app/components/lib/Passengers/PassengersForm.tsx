/* eslint-disable no-param-reassign */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { FormStatusT } from '../../../redux/slices/utils/reduxFormUtils';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import Form from '../Common/Form';
import { messagesInfo } from '../Common/Info/messagesInfo';
import { getAges } from './checkAges';
import PassengersNextSection from './PassengersNextSection';

const { childrenOverwhelm, tooManyPlaces } = messagesInfo;
// type FormStatusIdT = {
//     formStatus: FormStatusT;

// }

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
        if (placesAmount < microPeople + adults) msg = tooManyPlaces;

        if (msg) {
            dispatch(setInfo({ msg, status: 'error' }));
            return;
        }
        navigate('/somewhere');
    };

    return (
        <Form cls='passengers-total-form' onSubmitForm={onSubmit}>
            <PassengersNextSection formsStatus={statusValidity} />
        </Form>
    );
}

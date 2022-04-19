import React from 'react';
import { useNavigate } from 'react-router-dom';
import BtnNextRoute from '../Common/Form/BtnNextRoute';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setInfo } from '../../../redux/slices/infoSlice';
import { messagesError } from '../Common/Info/messagesInfo';
import Form from '../Common/Form/Form';
import { useCheckPasPlaces } from './useCheckPasPlaces';

export type EmptyPlaceT = { index: number; route: string };
const emptyMsg = messagesError.emptyPasPlace;

export default function PasPlacesForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { isValid, allEmpty } = useCheckPasPlaces();
    const onSubmit = () => {
        if (!isValid) {
            dispatch(setInfo({ status: 'error', msg: emptyMsg(allEmpty[0]) }));
            return;
        }
        navigate('/payment');
    };

    return (
        <Form onSubmitForm={onSubmit}>
            <BtnNextRoute cls='pas-places' disabled={!isValid}>
                Далее
            </BtnNextRoute>
        </Form>
    );
}

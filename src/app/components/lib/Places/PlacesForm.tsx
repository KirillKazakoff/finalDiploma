import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/reduxHooks';
import BtnNextRouteNew from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';
import { setInfo } from '../../../redux/slices/infoSlice';
import { messagesError } from '../Common/Info/messagesInfo';
import { useCheckPlaces } from './useCheckPlaces';

const errorMsg = messagesError.emptyPlaces;

export default function PlacesNextSection() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isValid, routeError } = useCheckPlaces();

    const onSubmit = () => {
        if (!isValid) {
            dispatch(setInfo({ status: 'error', msg: errorMsg(routeError) }));
            return;
        }
        navigate('/passengers');
    };

    return (
        <Form onSubmitForm={onSubmit}>
            <BtnNextRouteNew cls='places' disabled={!isValid}>
                Далее
            </BtnNextRouteNew>
        </Form>
    );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { TicketRouteT } from '../../../types/models/modelTickets';
import BtnNextRouteNew from '../Common/Form/BtnNextRoute';
import Form from '../Common/Form/Form';
import { setInfo } from '../../../redux/slices/infoSlice';
import { messagesError } from '../Common/Info/messagesInfo';
import { useCheckPlaces } from './useCheckPlaces';

const errorMsg = messagesError.emptyPlaces;
type Props = { ticketRoute: TicketRouteT };

export default function PlacesNextSection({ ticketRoute }: Props) {
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

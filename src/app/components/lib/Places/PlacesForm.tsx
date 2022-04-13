import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import { TicketRouteT } from '../../../types/models/modelTickets';
import BtnNextRouteNew from '../Common/BtnNextRouteNew';
import Form from '../Common/Form';
import { setInfo } from '../../../redux/slices/infoSlice';
import { messagesError } from '../Common/Info/messagesInfo';

const errorMsg = messagesError.emptyPlaces;
type Props = { ticketRoute: TicketRouteT };

export default function PlacesNextSection({ ticketRoute }: Props) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { arrival } = ticketRoute;
    const placesLength = useAppSelector(selectPlacesLength);

    let disabled = true;
    let routeError = '';
    if (placesLength.total > 0) {
        disabled = false;
    }
    if (arrival && placesLength.arrival === 0) {
        disabled = true;
        routeError = 'Обратно';
    }
    if (placesLength.departure === 0) {
        disabled = true;
        routeError = 'Туда';
    }

    const onSubmit = () => {
        if (disabled) {
            dispatch(setInfo({ status: 'error', msg: errorMsg(routeError) }));
            return;
        }
        navigate('/passengers');
    };

    return (
        <Form onSubmitForm={onSubmit}>
            <BtnNextRouteNew cls='places' disabled={disabled}>
                Далее
            </BtnNextRouteNew>
        </Form>
    );
}

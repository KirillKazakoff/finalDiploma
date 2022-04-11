import React from 'react';
import BtnNextRoute from '../Common/BtnNextRoute';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import { TicketRouteT } from '../../../types/models/modelTickets';

type Props = { ticketRoute: TicketRouteT };
export default function PlacesNextSection({ ticketRoute }: Props) {
    const { arrival } = ticketRoute;
    const placesLength = useAppSelector(selectPlacesLength);

    let disabled = true;
    if (placesLength.total > 0) {
        disabled = false;
    }
    if (arrival && placesLength.arrival === 0) {
        disabled = true;
    }
    if (placesLength.departure === 0) {
        disabled = true;
    }

    return (
        <div className='places-next-route-wrapper'>
            <BtnNextRoute to='/passengers' disabled={disabled} />
        </div>
    );
}

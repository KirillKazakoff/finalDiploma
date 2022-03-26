import React from 'react';
import TicketLeft from './Ticket/TicketLeft';
import TicketCenter from './Ticket/TicketCenter';

import { TicketProps } from '../../../types/typesTicket';
import TicketRight from './Ticket/TicketRight';
import { useAppDispatch } from '../../../redux/reduxHooks';
import { setActiveTicket } from '../../../redux/slices/placesSlice';

export default function Ticket({ ticket }: TicketProps) {
    const dispatch = useAppDispatch();
    const { departure, arrival } = ticket.ticketRoute;
    const routes = { departure, arrival };

    const onClick = () => {
        dispatch(setActiveTicket(ticket));
    };

    return (
        <li className='ticket shadowed'>
            <TicketLeft departure={routes.departure} />
            <TicketCenter routes={routes} />
            <TicketRight
                routes={routes}
                seatsInfoAux={ticket.seatsInfoAux}
                onClick={onClick}
            />
        </li>
    );
}

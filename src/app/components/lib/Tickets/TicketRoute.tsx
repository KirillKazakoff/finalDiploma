import React from 'react';
import TicketLeft from './Ticket/TicketLeft';
import TicketCenter from './Ticket/TicketCenter';

import { TicketProps } from '../../../types/typesTicket';
import TicketRight from './Ticket/TicketRight';

export default function Ticket({ ticket }: TicketProps) {
    const routes = {
        departure: ticket.departure,
        arrival: ticket.arrival,
    };

    return (
        <li className='ticket shadowed'>
            <TicketLeft departure={routes.departure} />
            <TicketCenter routes={routes} />
            <TicketRight
                routes={routes}
                available_seats_info={ticket.available_seats_info}
            />
        </li>
    );
}

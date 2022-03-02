import React from 'react';
import TicketLeft from './TicketLeft';
import TicketCenter from './TicketCenter';
import TicketRight from './TicketRight';
import { TicketProps } from '../../../types/typesTicket';

export default function Ticket({ ticket }: TicketProps) {
    const routes = {
        departure: ticket.departure,
        arrival: ticket.arrival,
    };

    return (
        <li className='ticket shadowed'>
            <TicketLeft departure={routes.departure} />
            <TicketCenter routes={routes} />
            <TicketRight routes={routes} />
        </li>
    );
}

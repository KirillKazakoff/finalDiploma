import React from 'react';
import TicketLeft from './TicketLeft';
import TicketCenter from './TicketCenter';
import TicketRight from './TicketRight';

export default function Ticket() {
    return (
        <li className='ticket shadowed'>
            <TicketLeft />
            <TicketCenter />
            <TicketRight />
        </li>
    );
}

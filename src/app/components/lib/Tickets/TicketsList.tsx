import React from 'react';
import Ticket from './Ticket';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectTickets } from '../../../redux/slices/ticketsSlice';
import { selectFetchStatus } from '../../../redux/slices/searchFormSlice';

export default function TicketsList() {
    const tickets = useAppSelector(selectTickets);
    const status = useAppSelector(selectFetchStatus);
    console.log(tickets);
    console.log(status);

    return (
        <ul className='tickets'>
            <Ticket />
        </ul>
    );
}

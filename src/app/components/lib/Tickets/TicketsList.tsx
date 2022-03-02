import React from 'react';
import { nanoid } from 'nanoid';
import Ticket from './TicketRoute';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectTickets } from '../../../redux/slices/ticketsSlice';
import { selectFetchStatus } from '../../../redux/slices/searchFormSlice';

export default function TicketsList() {
    const tickets = useAppSelector(selectTickets);
    const status = useAppSelector(selectFetchStatus);
    console.log(status);
    if (status !== 'loaded') return null;

    console.log(tickets);
    const ticketsList = tickets.items.map((ticket) => (
        <Ticket key={nanoid()} ticket={ticket} />
    ));

    return <ul className='tickets'>{ticketsList}</ul>;
}

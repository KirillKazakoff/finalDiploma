import React from 'react';
import { nanoid } from 'nanoid';
import TicketRoute from './TicketRoute';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectTickets } from '../../../redux/slices/ticketsSlice';
import { selectFetchStatus } from '../../../redux/slices/searchFormSlice';

export default function TicketsList() {
    const ticketsInfo = useAppSelector(selectTickets);
    const status = useAppSelector(selectFetchStatus);
    if (status !== 'loaded') return null;

    const ticketsList = ticketsInfo.tickets.map((ticket) => (
        <TicketRoute key={nanoid()} ticket={ticket} />
    ));

    return <ul className='tickets'>{ticketsList}</ul>;
}

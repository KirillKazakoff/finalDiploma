import React from 'react';
import { nanoid } from 'nanoid';
import TicketRoute from './TicketRoute';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFetchStatus, selectTickets } from '../../../redux/slices/ticketsSlice';

export default function TicketsList() {
    const ticketsInfo = useAppSelector(selectTickets);
    const status = useAppSelector(selectFetchStatus);

    const ticketsList = ticketsInfo.tickets.map((ticket) => (
        <TicketRoute key={nanoid()} ticket={ticket} />
    ));

    return <ul className='tickets'>{status !== 'loading' ? ticketsList : null}</ul>;
}

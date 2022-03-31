import React from 'react';
import { nanoid } from 'nanoid';
import TicketRoute from './TicketRoute';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../redux/slices/ticketsSlice';
import { selectFilteredTickets } from '../../../redux/slices/utils/selectFilteredTickets';

export default function TicketsList() {
    const tickets = useAppSelector(selectFilteredTickets);
    const status = useAppSelector(selectFetchStatus);

    const ticketsList = tickets.map((ticket) => (
        <TicketRoute key={nanoid()} ticket={ticket} />
    ));

    return <ul className='tickets'>{status !== 'loading' ? ticketsList : null}</ul>;
}

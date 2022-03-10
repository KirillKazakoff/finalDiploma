import React from 'react';
import TripFilter from '../lib/Aside/TripFilter/TripFilter';
import LastTickets from '../lib/Aside/LastTickets/LastTickets';
import TicketsFiltration from '../lib/Tickets/TicketsFiltration';
import TicketsList from '../lib/Tickets/TicketsList';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectFetchStatus } from '../../redux/slices/searchFormSlice';

export default function TicketsRoute() {
    const fetchStatus = useAppSelector(selectFetchStatus);

    if (fetchStatus !== 'loaded') {
        return <main className='main main-central framed' />;
    }

    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripFilter />
                <LastTickets />
            </aside>
            <section className='content-central'>
                <TicketsFiltration />
                <TicketsList />
            </section>
        </main>
    );
}

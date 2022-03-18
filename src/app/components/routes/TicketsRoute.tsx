import React from 'react';
import TripFilter from '../lib/Aside/TripFilter/TripFilter';
import LastTickets from '../lib/Aside/LastTickets/LastTickets';
import TicketsFiltration from '../lib/Tickets/TicketFiltration/TicketsFiltration';
import TicketsList from '../lib/Tickets/TicketsList';
import { useAppSelector } from '../../redux/reduxHooks';

import TicketsPagination from '../lib/Tickets/TicketsPagination/TicketsPagination';
import { selectTotalCount } from '../../redux/slices/ticketsSlice';

export default function TicketsRoute() {
    const totalCount = useAppSelector(selectTotalCount);
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
            {totalCount > 0 ? <TicketsPagination /> : null}
        </main>
    );
}

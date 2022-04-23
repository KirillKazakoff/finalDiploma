import React, { useEffect } from 'react';
import TripFilter from '../lib/Aside/TripFilter/TripFilter';
import LastTickets from '../lib/Aside/LastTickets/LastTickets';
import TicketsFiltration from '../lib/Tickets/TicketFiltration/TicketsFiltration';
import TicketsList from '../lib/Tickets/TicketsList';
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks';

import TicketsPagination from '../lib/Tickets/TicketsPagination/TicketsPagination';
import { selectTotalCount } from '../../redux/slices/ticketsSlice';
import PageLoader from '../lib/Common/PageLoader/PageLoader';
import { selectPageStatus, setPageCount } from '../../redux/slices/loaderSlice';

export default function TicketsRoute() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPageCount(1));
    }, [dispatch]);

    const totalCount = useAppSelector(selectTotalCount);
    const pageStatus = useAppSelector(selectPageStatus);

    if (pageStatus !== 'loaded') {
        return <PageLoader cls='page-loader-main' desc='Идет поиск...' />;
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
            {totalCount > 0 ? <TicketsPagination /> : null}
        </main>
    );
}

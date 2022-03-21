import React from 'react';
import TicketFiltrationSort from './TicketFiltrationSort';
import TicketFiltrationLimit from './TicketFiltrationLimit';
import TicketFiltrationFound from './TicketFiltrationFound';
import TicketsPaginationLoader from '../TicketsPagination/TicketsPaginationLoader';

export default function TicketsFiltration() {
    return (
        <header className='filtration'>
            <TicketFiltrationFound />
            <TicketsPaginationLoader cls='loader-found' />
            <TicketFiltrationSort />
            <TicketFiltrationLimit />
        </header>
    );
}

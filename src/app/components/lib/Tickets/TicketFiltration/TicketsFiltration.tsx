import React from 'react';
import TicketFiltrationSort from './TicketFiltrationSort';
import TicketFiltrationLimit from './TicketFiltrationLimit';
import TicketFiltrationFound from './TicketFiltrationFound';
import TicketsPaginationLoader from '../TicketsPagination/TicketsPaginationLoader';
import TicketFiltrationLoader from './TicketFiltrationLoader';

export default function TicketsFiltration() {
    return (
        <header className='filtration'>
            <TicketFiltrationFound />
            <TicketFiltrationLoader />
            <TicketFiltrationSort />
            <TicketFiltrationLimit />
        </header>
    );
}

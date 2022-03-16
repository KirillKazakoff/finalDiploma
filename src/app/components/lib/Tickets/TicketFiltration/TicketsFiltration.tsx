import React from 'react';
import TicketFiltrationSort from './TicketFiltrationSort';
import TicketFiltrationLimit from './TicketFiltrationLimit';
import TicketFiltrationFound from './TicketFiltrationFound';

export default function TicketsFiltration() {
    return (
        <header className='filtration'>
            <TicketFiltrationFound />

            <TicketFiltrationSort />

            <TicketFiltrationLimit />
        </header>
    );
}

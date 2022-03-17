import React from 'react';
import TicketsPages from './TicketsPages';
import TurnPageLeft from './TurnPageLeft';
import TurnPageRight from './TurnPageRight';
import { usePagination } from './usePagination';

export default function TicketsPagination() {
    const { listeners, states, maxPage } = usePagination();
    const { onPageClick, onRightClick, onLeftClick } = listeners;
    const { endPage, activePage, startPage } = states;

    return (
        <div className='tickets-pagination'>
            <TurnPageLeft onClick={onLeftClick} activePage={activePage} />
            <TicketsPages
                onClick={onPageClick}
                activePage={activePage}
                endPage={endPage}
                startPage={startPage}
            />
            <TurnPageRight
                onClick={onRightClick}
                maxPage={maxPage}
                activePage={activePage}
            />
        </div>
    );
}

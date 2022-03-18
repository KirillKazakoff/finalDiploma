import React from 'react';
import TicketsPages from './TicketsPages';
import TurnPageLeft from './TurnPageLeft';
import TurnPageRight from './TurnPageRight';
import { usePagination } from './usePagination';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../../redux/slices/ticketsSlice';

export default function TicketsPagination() {
    const fetchStatus = useAppSelector(selectFetchStatus);
    const { listeners, states, maxPage } = usePagination();
    const { onPageClick, onRightClick, onLeftClick } = listeners;
    const { endPage, activePage, startPage } = states;

    return (
        <div className='tickets-pagination'>
            <TurnPageLeft
                onClick={onLeftClick}
                activePage={activePage}
                fetchStatus={fetchStatus}
            />
            <TicketsPages
                onClick={onPageClick}
                activePage={activePage}
                endPage={endPage}
                startPage={startPage}
                fetchStatus={fetchStatus}
            />
            <TurnPageRight
                onClick={onRightClick}
                maxPage={maxPage}
                activePage={activePage}
                fetchStatus={fetchStatus}
            />
        </div>
    );
}

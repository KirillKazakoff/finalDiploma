import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectFetchStatus } from '../../../../redux/slices/ticketsSlice';
import TicketsPaginationLoader from '../TicketsPagination/TicketsPaginationLoader';

export default function TicketFiltrationLoader() {
    const fetchStatus = useAppSelector(selectFetchStatus);
    if (fetchStatus !== 'loading') return null;
    return (
        <div className='filtration-loader'>
            <div className='filtration-loader-desc'>идет поиск билетов:</div>
            <TicketsPaginationLoader cls='loader-found' />
        </div>
    );
}

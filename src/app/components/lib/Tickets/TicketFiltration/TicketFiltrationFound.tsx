import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import {
    selectFetchStatus,
    selectTotalCount,
} from '../../../../redux/slices/ticketsSlice';

export default function TicketFiltrationFound() {
    const foundCount = useAppSelector(selectTotalCount);
    const fetchStatus = useAppSelector(selectFetchStatus);

    const loadingDesc = fetchStatus === 'loading' ? ': идет загрузка' : null;
    return (
        <div className='filtration-found'>
            <span className='filtration-found-desc'>найдено</span>
            <span className='filtration-found-number'>
                {fetchStatus === 'loading' ? loadingDesc : foundCount}
            </span>
        </div>
    );
}

import React from 'react';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectTotalCount } from '../../../../redux/slices/ticketsSlice';

export default function TicketFiltrationFound() {
    const foundCount = useAppSelector(selectTotalCount);

    return (
        <div className='filtration-found'>
            <span className='filtration-found-desc'>найдено</span>
            <span className='filtration-found-number'>{foundCount}</span>
        </div>
    );
}

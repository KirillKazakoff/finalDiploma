import React from 'react';
import TicketsPaginationLoader from '../TicketsPagination/TicketsPaginationLoader';
import SpinLoader from '../../Common/SpinLoader/SpinLoader';

export default function TicketFiltrationLoader() {
    return (
        <TicketsPaginationLoader>
            <div className='filtration-loader'>
                <div className='filtration-loader-desc'>идет поиск:</div>
                <SpinLoader cls='loader-found' />
            </div>
        </TicketsPaginationLoader>
    );
}

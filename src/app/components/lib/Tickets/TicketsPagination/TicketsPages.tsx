import React from 'react';
import { FetchStatusT } from '../../../../types/typesPayload';
import { getNumbersArr } from './paginationUtils';
import { OnPageClickT } from './usePagination';
import TicketsPaginationLoader from './TicketsPaginationLoader';
import SpinLoader from '../../Common/SpinLoader/SpinLoader';

type Props = {
    fetchStatus: FetchStatusT;
    startPage: number;
    endPage: number;
    activePage: number;
    onClick: OnPageClickT;
};

export default function TicketsPages(props: Props) {
    const {
        startPage, endPage, activePage, onClick, fetchStatus,
    } = props;

    const numbersArr = getNumbersArr(startPage, endPage);
    const ticketsPages = numbersArr.map((ticketPage) => {
        const isActivePage = activePage === ticketPage;
        const isDisabled = fetchStatus === 'loading';
        const loader = isActivePage && isDisabled ? (
            <TicketsPaginationLoader>
                <SpinLoader cls='loader-active-pagination' />
            </TicketsPaginationLoader>
        ) : null;

        let className = 'pagination-container tickets-page';

        if (isActivePage) {
            className = `${className} tickets-page-active`;
        }
        return (
            <button
                key={ticketPage}
                className={className}
                onClick={onClick(ticketPage)}
                disabled={isDisabled}
                type='button'
            >
                {loader || ticketPage}
            </button>
        );
    });

    return <ul className='tickets-pages'>{ticketsPages}</ul>;
}

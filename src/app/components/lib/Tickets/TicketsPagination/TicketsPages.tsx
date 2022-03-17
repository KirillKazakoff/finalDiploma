import React from 'react';
import { getNumbersArr } from './paginationUtils';
import { OnPageClickT } from './usePagination';

type Props = {
    startPage: number;
    endPage: number;
    activePage: number;
    onClick: OnPageClickT;
};

export default function TicketsPages(props: Props) {
    const {
        startPage, endPage, activePage, onClick,
    } = props;

    const numbersArr = getNumbersArr(startPage, endPage);
    const ticketsPages = numbersArr.map((ticketPage) => {
        let className = 'pagination-container tickets-page';

        if (activePage === ticketPage) {
            className = `${className} tickets-page-active`;
        }
        return (
            <button
                key={ticketPage}
                className={className}
                onClick={onClick(ticketPage)}
                type='button'
            >
                {ticketPage}
            </button>
        );
    });

    return <ul className='tickets-pages'>{ticketsPages}</ul>;
}
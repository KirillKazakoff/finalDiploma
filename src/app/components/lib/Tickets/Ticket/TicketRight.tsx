/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import React from 'react';
import { TicketRightProps } from '../../../../types/typesTicket';
import { PriceInfoCoachT } from '../../../../types/models/modelTickets';

import TicketType from './TicketType';

export default function TicketRight({ routes, available_seats_info }: TicketRightProps) {
    const { departure, arrival } = routes;

    const depPrices = departure.price_info;
    if (!arrival) return null;

    const arrPrices = arrival.price_info;
    const minPrices = { ...arrPrices };

    Object.keys(depPrices).forEach((carriageKey) => {
        const arrObj = arrPrices[carriageKey];
        const depObj = depPrices[carriageKey];
        const minObj: PriceInfoCoachT = {};

        Object.keys(depObj).forEach((priceKey) => {
            let minPrice = depObj[priceKey];

            if (arrObj && arrObj[priceKey] < depObj[priceKey]) {
                minPrice = arrObj[priceKey];
            }
            minObj[priceKey] = minPrice;
        });

        minPrices[carriageKey] = minObj;
    });

    // console.log(minPrices);
    // console.log(available_seats_info);
    // const ticketTypes = Object.keys(available_seats_info).map((carriageKey) => {

    // });

    return (
        <aside className='ticket-aside-right'>
            <ul className='ticket-types'>
                <TicketType />
                <TicketType />
                <TicketType />
                <TicketType />
            </ul>
            <footer className='ticket-footer framed-ticket-right'>
                <div className='extra-options'>
                    <img
                        className='filter-secondary'
                        src='./svg/features/wireless.svg'
                        alt='wireless'
                    />
                    <img
                        className='filter-secondary'
                        src='./svg/features/rocket.svg'
                        alt='rocket'
                    />
                    <img
                        className='filter-secondary'
                        src='./svg/features/cup.svg'
                        alt='cup'
                    />
                </div>
                <button type='submit' className='btn btn-choose-places'>
                    Выбрать места
                </button>
            </footer>
        </aside>
    );
}

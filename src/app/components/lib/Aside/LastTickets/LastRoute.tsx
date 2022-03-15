import React from 'react';
import type { TicketRouteT } from '../../../../types/models/modelTickets';
import Extras from '../../Common/Extras';
import formatCost from '../../Common/utils/formatCost';

type LastRouteProps = { ticket: TicketRouteT };

export default function LastRoute({ ticket }: LastRouteProps) {
    const { min_price, departure } = ticket;

    const {
        have_wifi, have_air_conditioning, is_express, from, to,
    } = departure;
    const extras = { have_air_conditioning, have_wifi, is_express };

    return (
        <li className='last-ticket'>
            <div className='last-cities'>
                <div className='cap-first last-city last-city-from'>{from.city.name}</div>
                <div className='cap-first last-city last-city-to'>{to.city.name}</div>
            </div>
            <div className='last-stations'>
                <div className='last-station last-station-from'>
                    {from.railway_station_name}
                </div>
                <div className='last-station last-station-to'>
                    {to.railway_station_name}
                </div>
            </div>
            <footer className='last-ticket-footer'>
                <Extras extras={extras} filter='filter-secondary-super-light' />
                <div className='cost last-cost'>
                    <span className='cost-prefix'>от</span>
                    <div className='cost-count-container'>
                        <span className='cost-count last-cost-count'>
                            {formatCost(min_price)}
                        </span>
                        <span className='cost-money-symbol last-cost-money-symbol'>
                            ₽
                        </span>
                    </div>
                </div>
            </footer>
        </li>
    );
}

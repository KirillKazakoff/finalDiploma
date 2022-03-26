import React from 'react';
import { TrainRouteProps } from '../../../types/typesTicket';
import { getTrainHour, getDuration } from './Ticket/getTrainTime';

export default function TrainRoute({ route, arrowCls }: TrainRouteProps) {
    const { from, to, duration } = route;

    return (
        <div className='ticket-direction'>
            <div className='ticket-info ticket-left'>
                <span className='ticket-time ticket-time-left'>
                    {getTrainHour(from.datetime)}
                </span>
                <span className='cap-first ticket-city ticket-city-left'>
                    {from.city.name}
                </span>
                <span className='cap-first ticket-station ticket-station-left'>
                    {from.railway_station_name}
                </span>
            </div>

            <div className='travel-time'>
                <span className='travel-time-desc'>{getDuration(duration)}</span>
                <img src={`./svg/arrows/arrow-travel-time-${arrowCls}.svg`} alt='arrow' />
            </div>

            <div className='ticket-info ticket-right'>
                <span className='ticket-time ticket-time-right'>
                    {getTrainHour(to.datetime)}
                </span>
                <span className='cap-first ticket-city ticket-city-right'>
                    {to.city.name}
                </span>
                <span className='cap-first ticket-station ticket-station-right'>
                    {to.railway_station_name}
                </span>
            </div>
        </div>
    );
}

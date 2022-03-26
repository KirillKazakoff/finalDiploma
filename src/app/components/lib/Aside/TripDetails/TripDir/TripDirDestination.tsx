import React from 'react';
import { TrainRouteT } from '../../../../../types/models/modelTickets';
import { getDuration } from '../../../Tickets/Ticket/getTrainTime';
import TripDirTime from './TripDirTime';

type Props = { dir: string; route: TrainRouteT };

export default function TripDetailsDestination({ dir, route }: Props) {
    const { from, to, duration } = route;

    return (
        <div className='trip-details-destination'>
            <div className='trip-details-row trip-details-row-time'>
                <TripDirTime station={dir === 'to' ? from : to} side='left' />
                <div className='travel-time details-travel-time'>
                    <span className='travel-time-desc details-travel-time-desc'>
                        {getDuration(duration)}
                    </span>
                    <img src={`./svg/arrows/arrow-travel-time-${dir}.svg`} alt='arrow' />
                </div>
                <TripDirTime station={dir === 'to' ? to : from} side='right' />
            </div>
            <div className='trip-details-row trip-details-row-stations'>
                <div className='trip-details-station-container'>
                    <span className='station-city fl'>{from.city.name}</span>
                    <span className='station-name fl'>{`${from.railway_station_name} вокзал`}</span>
                </div>
                <div className='trip-details-station-container trip-details-station-container-right'>
                    <span className='station-city fl'>{to.city.name}</span>
                    <span className='station-name fl'>{`${to.railway_station_name} вокзал`}</span>
                </div>
            </div>
        </div>
    );
}

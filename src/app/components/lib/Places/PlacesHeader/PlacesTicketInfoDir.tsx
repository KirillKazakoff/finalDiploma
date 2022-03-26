import React from 'react';
import { StationProp } from '../../../../types/typesPlaces';
import { getTrainHour } from '../../Tickets/Ticket/getTrainTime';

export default function PlacesTicketInfoDir({ station }: StationProp) {
    const { datetime, city, railway_station_name } = station;

    return (
        <div className='ticket-info'>
            <span className='ticket-time'>{getTrainHour(datetime)}</span>
            <span className='fl ticket-city'>{city.name}</span>
            <span className='fl ticket-station'>{railway_station_name}</span>
        </div>
    );
}

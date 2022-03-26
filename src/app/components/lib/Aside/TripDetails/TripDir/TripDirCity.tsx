import React from 'react';
import { StationT } from '../../../../../types/models/modelTickets';

type Props = { station: StationT; side: string };
export default function TripDirCity({ station, side }: Props) {
    const { city, railway_station_name } = station;

    return (
        <div
            className={`trip-details-station-container trip-details-station-container-${side}`}
        >
            <span className='station-city fl'>{city.name}</span>
            <span className='station-name fl'>{`${railway_station_name} вокзал`}</span>
        </div>
    );
}

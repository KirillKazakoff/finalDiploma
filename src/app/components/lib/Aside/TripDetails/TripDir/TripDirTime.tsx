import React from 'react';
import { StationT } from '../../../../../types/models/modelTickets';
import { formatDateNumber } from '../../../Search/SearchDate/formatDate';
import { getTrainHour } from '../../../Tickets/Ticket/getTrainTime';

type Props = { station: StationT; side: string };

export default function TripDirTime({ station, side }: Props) {
    const { datetime } = station;

    return (
        <div
            className={`trip-details-time-container trip-details-time-container-${side}`}
        >
            <span className='clock-time-details'>{getTrainHour(datetime)}</span>
            <span className='date-details'>{formatDateNumber(datetime)}</span>
        </div>
    );
}

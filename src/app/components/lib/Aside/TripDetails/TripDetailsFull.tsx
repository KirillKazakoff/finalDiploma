import React from 'react';
import TripTitle from './TripTitle';
import TripDir from './TripDir/TripDir';
import TripTotal from './TripTotal';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectActiveTicket } from '../../../../redux/slices/placesSlice';
import { selectPasPlaces } from '../../../../redux/slices/pasPlacesSlice';

export default function TripDetailsFull() {
    const pasPlaces = useAppSelector(selectPasPlaces);
    const { ticketRoute: ticket } = useAppSelector(selectActiveTicket);

    return (
        <div className='aside-part aside-part-trip'>
            <TripTitle />
            <TripDir
                dir='to'
                desc='Туда'
                route={ticket.departure}
                pasPlaces={pasPlaces.departure}
            />
            <TripDir
                dir='from'
                desc='Обратно'
                route={ticket.arrival}
                pasPlaces={pasPlaces.arrival}
            />
            <TripTotal />
        </div>
    );
}

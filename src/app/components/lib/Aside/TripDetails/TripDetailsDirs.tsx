import React from 'react';
import TripDir from './TripDir/TripDir';
import TripTitle from './TripTitle';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectActiveTicket } from '../../../../redux/slices/placesSlice';

export default function TripDetailsDirs() {
    const ticket = useAppSelector(selectActiveTicket);
    const { arrival, departure } = ticket.ticketRoute;
    return (
        <div className='aside-part aside-part-trip'>
            <TripTitle />
            <TripDir
                dir='to' desc='Туда'
                route={departure}
            />
            <TripDir
                dir='from' desc='Обратно'
                route={arrival}
            />
        </div>
    );
}

import React from 'react';
import TripTitle from './TripTitle';
import TripDir from './TripDir/TripDir';
import TripPassengers from './TripPassengers/TripPassengers';
import TripTotal from './TripTotal';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectActiveTicket } from '../../../../redux/slices/ticketsSlice';

export default function TripDetailsFull() {
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
            <TripPassengers />
            <TripTotal />
        </div>
    );
}

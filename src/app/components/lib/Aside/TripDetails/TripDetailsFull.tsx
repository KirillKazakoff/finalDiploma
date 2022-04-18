import React from 'react';
import { NavLink } from 'react-router-dom';
import TripTitle from './TripTitle';
import TripDir from './TripDir/TripDir';
import TripTotal from './TripTotal';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { selectActiveTicket } from '../../../../redux/slices/placesSlice';
import { selectPasPlaces } from '../../../../redux/slices/pasPlacesSlice';

export default function TripDetailsFull() {
    const pasPlaces = useAppSelector(selectPasPlaces);
    const { ticketRoute: ticket } = useAppSelector(selectActiveTicket);

    if (pasPlaces.departure.length === 0) {
        return (
            <div className='aside-part aside-part-trip'>
                <TripTitle />
                <NavLink to='/places'>
                    <div className='trip-details trip-details-empty'>
                        <button type='button' className='btn btn-trip-details-empty'>
                            Вернитесь и заполните места
                        </button>
                    </div>
                </NavLink>
            </div>
        );
    }

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

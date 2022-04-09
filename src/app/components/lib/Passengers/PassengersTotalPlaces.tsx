import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';

export default function PassengersTotalPlaces() {
    const placesLength = useAppSelector(selectPlacesLength);

    return (
        <div className='passengers-total-places'>
            <span className='passengers-total-places-desc'>
                Всего забронировано мест:
            </span>
            <span className='passengers-total-places-count'>{placesLength}</span>
        </div>
    );
}

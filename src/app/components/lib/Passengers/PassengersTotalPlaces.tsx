import React from 'react';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';

export default function PassengersPlacesInfo() {
    const { total, arrival, departure } = useAppSelector(selectPlacesLength);

    return (
        <div className='passengers-places-info'>
            <div className='passengers-places-info-total'>
                <span className='passengers-places-info-desc'>
                    Всего забронировано мест:
                </span>
                <span className='passengers-places-info-count'>{total}</span>
            </div>

            <div className='passenges-places-info-dir'>
                <span className='passengers-places-info-desc'>Туда:</span>
                <span className='passengers-places-info-count'>{departure}</span>
            </div>

            {arrival ? (
                <div className='passenges-places-info-dir'>
                    <span className='passengers-places-info-desc'>Обратно:</span>
                    <span className='passengers-places-info-count'>{arrival}</span>
                </div>
            ) : null}
        </div>
    );
}

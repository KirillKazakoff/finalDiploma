import React from 'react';

export default function TripDetailsTrain() {
    return (
        <div className='trip-details-train'>
            <div className='trip-details-row'>
                <span className='train-number-desc'>№ Поезда</span>
                <span className='train-number train-number-details'>116C</span>
            </div>
            <div className='trip-details-row trip-details-row-routes'>
                <span className='train-title-desc'>Название</span>
                <ul className='train-routes-details'>
                    <li className='train-route-details'>Адлер</li>
                    <li className='train-route-details'>Санкт-Петербург</li>
                </ul>
            </div>
        </div>
    );
}

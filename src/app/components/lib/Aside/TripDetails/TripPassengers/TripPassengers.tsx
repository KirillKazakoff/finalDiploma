import React from 'react';
import SubtleContainerPassengers from './SubtleContainerPassengers';

export default function TripPassengers() {
    return (
        <SubtleContainerPassengers desc='Пассажиры'>
            <div className='trip-details'>
                <div className='trip-details-passengers'>
                    <div className='trip-details-row trip-details-row-passengers'>
                        <span className='details-person-age'>2 Взрослых</span>
                        <div className='details-cost-count-container'>
                            <span className='details-cost-count'>5 840</span>
                            <span className='details-cost-money-symbol'>Р</span>
                        </div>
                    </div>
                    <div className='trip-details-row trip-details-row-passengers'>
                        <span className='details-person-age'>1 Ребенок</span>
                        <div className='details-cost-count-container'>
                            <span className='details-cost-count'>1 920</span>
                            <span className='details-cost-money-symbol'>Р</span>
                        </div>
                    </div>
                </div>
            </div>
        </SubtleContainerPassengers>
    );
}

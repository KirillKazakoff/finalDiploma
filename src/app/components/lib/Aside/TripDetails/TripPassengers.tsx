import React from 'react';

export default function TripPassengers() {
    return (
        <section className='trip-section trip-section-subtle'>
            <div className='subtle-container'>
                <img
                    className='ic-subtle-passenger-sm'
                    src='./svg/passenger.svg'
                    alt='arrow-to'
                />
                <span className='subtle-desc'>Пассажиры</span>
                <span className='subtle-collapse substract'>-</span>
            </div>
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
        </section>
    );
}

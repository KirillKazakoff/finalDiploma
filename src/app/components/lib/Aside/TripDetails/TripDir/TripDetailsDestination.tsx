import React from 'react';

type Props = { dir: string };

export default function TripDetailsDestination({ dir }: Props) {
    return (
        <div className='trip-details-destination'>
            <div className='trip-details-row trip-details-row-time'>
                <div className='trip-details-time-container'>
                    <span className='clock-time-details'>00:10</span>
                    <span className='date-details'>30.08.2018</span>
                </div>
                <div className='travel-time details-travel-time'>
                    <span className='travel-time-desc details-travel-time-desc'>
                        9 : 42
                    </span>
                    <img src={`./svg/arrows/arrow-travel-time-${dir}.svg`} alt='arrow' />
                </div>
                <div className='trip-details-time-container trip-details-time-container-right'>
                    <span className='clock-time-details'>00:10</span>
                    <span className='date-details'>30.08.2018</span>
                </div>
            </div>
            <div className='trip-details-row trip-details-row-stations'>
                <div className='trip-details-station-container'>
                    <span className='station-city'>Москва</span>
                    <span className='station-name'>Курский вокзал</span>
                </div>
                <div className='trip-details-station-container trip-details-station-container-right'>
                    <span className='station-city'>Санкт-Петербург</span>
                    <span className='station-name'>Ладожский вокзал</span>
                </div>
            </div>
        </div>
    );
}

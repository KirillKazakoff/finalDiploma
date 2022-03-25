import React from 'react';

type Props = { dir: string; desc: string };

export default function TripDir({ dir, desc }: Props) {
    return (
        <section className='trip-section trip-section-subtle'>
            <div className='subtle-container'>
                <img
                    className='ic-subtle-arrow-sm'
                    src={`./svg/arrows/arrow-subtle-time-${dir}.svg`}
                    alt='arrow'
                />
                <span className='subtle-desc'>{desc}</span>
                <span className='subtle-time-date'>30.08.2018</span>
                <span className='subtle-collapse substract'>-</span>
            </div>
            <div className='trip-details'>
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
                            <img
                                src={`./svg/arrows/arrow-travel-time-${dir}.svg`}
                                alt='arrow'
                            />
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
            </div>
        </section>
    );
}

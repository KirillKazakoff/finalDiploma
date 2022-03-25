import React from 'react';

type Props = { dir: string };
export default function PlacesTicketInfo({ dir }: Props) {
    return (
        <div className='places-ticket-info framed-places'>
            <div className='places-ticket-info-part places-ticket-info-part-train'>
                <div className='train-wrapper train-wrapper-sm'>
                    <img
                        className='ic-train-sm filter-main'
                        src='./svg/train.svg'
                        alt='train'
                    />
                </div>
                <div className='train-info'>
                    <div className='train-number'>116C</div>
                    <ul className='train-stations'>
                        <li className='train-station train-station-next'>
                            <span className='train-station-desc'>Москва</span>
                            <img src='./svg/arrows/arrow-station.svg' alt='arrow' />
                        </li>
                        <li className='train-station train-station-next'>
                            <span className='train-station-desc'>Санкт-Петербург</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='places-ticket-info-part places-ticket-info-part-direction'>
                <div className='ticket-direction places-ticket-direction'>
                    <div className='ticket-info'>
                        <span className='ticket-time'>00:10</span>
                        <span className='ticket-city'>Москва</span>
                        <span className='ticket-station'>Курский вокзал</span>
                    </div>

                    <img
                        src={`./svg/arrows/arrow-travel-time-${dir}.svg`}
                        style={{
                            position: 'relative',
                            left: '-40px',
                        }}
                        alt='arrow'
                    />

                    <div className='ticket-info'>
                        <span className='ticket-time'>09:52</span>
                        <span className='ticket-city'>Санкт-Петербург</span>
                        <span className='ticket-station'>Ладожский вокзал</span>
                    </div>
                </div>
            </div>
            <div className='places-ticket-info-part places-ticket-info-part-time'>
                <div className='places-travel-time'>
                    <img
                        className='ic-time filter-main'
                        src='./svg/clock.svg'
                        alt='clock'
                    />
                    <span className='places-travel-time-desc'>9 часов 42 минуты</span>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default function TicketCenter() {
    return (
        <div className='ticket-center'>
            <div className='ticket-direction'>
                <div className='ticket-info ticket-from'>
                    <span className='ticket-time ticket-time-from'>00:10</span>
                    <span className='ticket-city ticket-city-from'>Москва</span>
                    <span className='ticket-station ticket-station-from'>
                        Курский вокзал
                    </span>
                </div>
                <div className='travel-time'>
                    <span className='travel-time-desc'>9 : 42</span>
                    <img src='./svg/arrows/arrow-travel-time-to.svg' alt='arrow-to' />
                </div>
                <div className='ticket-info ticket-to'>
                    <span className='ticket-time ticket-time-to'>09:52</span>
                    <span className='ticket-city ticket-city-to'>Санкт-Петербург</span>
                    <span className='ticket-station ticket-station-to'>
                        Ладожский вокзал
                    </span>
                </div>
            </div>

            <div className='ticket-direction'>
                <div className='ticket-info ticket-from'>
                    <span className='ticket-time ticket-time-from'>00:10</span>
                    <span className='ticket-city ticket-city-from'>Москва</span>
                    <span className='ticket-station ticket-station-from'>
                        Курский вокзал
                    </span>
                </div>
                <div className='travel-time'>
                    <span className='travel-time-desc'>9 : 42</span>
                    <img src='./svg/arrows/arrow-travel-time-from.svg' alt='arrow-from' />
                </div>
                <div className='ticket-info ticket-to'>
                    <span className='ticket-time ticket-time-to'>09:52</span>
                    <span className='ticket-city ticket-city-to'>Санкт-Петербург</span>
                    <span className='ticket-station ticket-station-to'>
                        Ладожский вокзал
                    </span>
                </div>
            </div>
        </div>
    );
}

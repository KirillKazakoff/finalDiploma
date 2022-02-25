import React from 'react';

export default function LastTickets() {
    return (
        <div className='aside-part aside-part-last-tickets'>
            <h2 className='last-tickets-title'>Последние билеты</h2>
            <ul className='last-tickets'>
                <li className='last-ticket'>
                    <div className='last-cities'>
                        <div className='last-city last-city-from'>Санкт-Петербург</div>
                        <div className='last-city last-city-to'>Самара</div>
                    </div>
                    <div className='last-stations'>
                        <div className='last-station last-station-from'>
                            Курский вокзал
                        </div>
                        <div className='last-station last-station-to'>
                            Московский вокзал
                        </div>
                    </div>
                    <footer className='last-ticket-footer'>
                        <div className='extra-options'>
                            <img src='./svg/features/wireless.svg' alt='wireless' />
                            <img src='./svg/features/rocket.svg' alt='rocket' />
                            <img src='./svg/features/cup.svg' alt='cup' />
                        </div>
                        <div className='cost last-cost'>
                            <span className='cost-prefix'>от</span>
                            <div className='cost-count-container'>
                                <span className='cost-count last-cost-count'>3 800</span>
                                <span className='cost-money-symbol'>&#8381</span>
                            </div>
                        </div>
                    </footer>
                </li>
                <li className='last-ticket'>
                    <div className='last-cities'>
                        <div className='last-city last-city-from'>Санкт-Петербург</div>
                        <div className='last-city last-city-to'>Самара</div>
                    </div>
                    <div className='last-stations'>
                        <div className='last-station last-station-from'>
                            Курский вокзал
                        </div>
                        <div className='last-station last-station-to'>
                            Московский вокзал
                        </div>
                    </div>
                    <footer className='last-ticket-footer'>
                        <div className='extra-options'>
                            <img src='./svg/features/wireless.svg' alt='wireless' />
                            <img src='./svg/features/rocket.svg' alt='rocket' />
                            <img src='./svg/features/cup.svg' alt='cup' />
                        </div>
                        <div className='cost last-cost'>
                            <span className='cost-prefix'>от</span>
                            <div className='cost-count-container'>
                                <span className='cost-count last-cost-count'>3 800</span>
                                <span className='cost-money-symbol'>&#8381</span>
                            </div>
                        </div>
                    </footer>
                </li>
            </ul>
        </div>
    );
}

import React from 'react';
import TripFilter from '../lib/Aside/TripFilter/TripFilter';
import LastTickets from '../lib/Aside/LastTickets/LastTickets';

export default function TicketsRoute() {
    return (
        <main className='main main-central framed'>
            <aside className='aside-central'>
                <TripFilter />
                <LastTickets />
            </aside>
            <section className='content-central'>
                <header className='filtration'>
                    <div className='filtration-found'>
                        <span className='filtration-found-desc'>найдено</span>
                        <span className='filtration-found-number'>20</span>
                    </div>
                    <div className='filtration-sort'>
                        <span className='filtration-sort-desc'>сортировать по:</span>
                        <span className='filtration-sort-filter'>времени</span>
                    </div>
                    <div className='filtration-amount'>
                        <span className='filtration-amount-desc'>показывать по:</span>
                        <ul className='filtration-amount-numbers'>
                            <li className='filtration-amount-number filtration-amount-number-active'>
                                5
                            </li>
                            <li className='filtration-amount-number'>10</li>
                            <li className='filtration-amount-number'>20</li>
                        </ul>
                    </div>
                </header>
                <ul className='tickets'>
                    <li className='ticket shadowed'>
                        <aside className='ticket-aside-left'>
                            <div className='train-wrapper train-wrapper-lg'>
                                <img
                                    className='ic-train'
                                    src='./svg/train.svg'
                                    alt='train'
                                />
                            </div>
                            <div className='train-number'>116C</div>
                            <ul className='train-stations'>
                                <li className='train-station train-station-previous'>
                                    <span className='train-station-desc'>Адлер</span>
                                    <img
                                        className='ic-arrow-station-prev'
                                        src='./svg/arrows/arrow-station.svg'
                                        alt='arrow'
                                    />
                                </li>
                                <li className='train-station train-station-next'>
                                    <span className='train-station-desc'>Москва</span>
                                    <img
                                        src='./svg/arrows/arrow-station.svg'
                                        alt='arrow'
                                    />
                                </li>
                                <li className='train-station train-station-next'>
                                    <span className='train-station-desc'>
                                        Санкт-Петербург
                                    </span>
                                </li>
                            </ul>
                        </aside>
                        <div className='ticket-center'>
                            <div className='ticket-direction'>
                                <div className='ticket-info ticket-from'>
                                    <span className='ticket-time ticket-time-from'>
                                        00:10
                                    </span>
                                    <span className='ticket-city ticket-city-from'>
                                        Москва
                                    </span>
                                    <span className='ticket-station ticket-station-from'>
                                        Курский вокзал
                                    </span>
                                </div>
                                <div className='travel-time'>
                                    <span className='travel-time-desc'>9 : 42</span>
                                    <img
                                        src='./svg/arrows/arrow-travel-time-to.svg'
                                        alt='arrow-to'
                                    />
                                </div>
                                <div className='ticket-info ticket-to'>
                                    <span className='ticket-time ticket-time-to'>
                                        09:52
                                    </span>
                                    <span className='ticket-city ticket-city-to'>
                                        Санкт-Петербург
                                    </span>
                                    <span className='ticket-station ticket-station-to'>
                                        Ладожский вокзал
                                    </span>
                                </div>
                            </div>

                            <div className='ticket-direction'>
                                <div className='ticket-info ticket-from'>
                                    <span className='ticket-time ticket-time-from'>
                                        00:10
                                    </span>
                                    <span className='ticket-city ticket-city-from'>
                                        Москва
                                    </span>
                                    <span className='ticket-station ticket-station-from'>
                                        Курский вокзал
                                    </span>
                                </div>
                                <div className='travel-time'>
                                    <span className='travel-time-desc'>9 : 42</span>
                                    <img
                                        src='./svg/arrows/arrow-travel-time-from.svg'
                                        alt='arrow-from'
                                    />
                                </div>
                                <div className='ticket-info ticket-to'>
                                    <span className='ticket-time ticket-time-to'>
                                        09:52
                                    </span>
                                    <span className='ticket-city ticket-city-to'>
                                        Санкт-Петербург
                                    </span>
                                    <span className='ticket-station ticket-station-to'>
                                        Ладожский вокзал
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='ticket-aside-right'>
                            <ul className='ticket-types'>
                                <li className='ticket-type'>
                                    <span className='ticket-type-desc'>Сидячий</span>
                                    <span className='ticket-amount-left'>88</span>
                                    <div className='cost main-cost'>
                                        <span className='cost-prefix'>от</span>
                                        <div className='cost-count-container main-cost-count-container'>
                                            <span className='cost-count main-cost-count'>
                                                3 800
                                            </span>
                                            <span className='cost-money-symbol'>
                                                {'{&#8381}'}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className='ticket-type'>
                                    <span className='ticket-type-desc'>Сидячий</span>
                                    <span className='ticket-amount-left'>88</span>
                                    <div className='cost main-cost'>
                                        <span className='cost-prefix'>от</span>
                                        <div className='cost-count-container main-cost-count-container'>
                                            <span className='cost-count main-cost-count'>
                                                3 800
                                            </span>
                                            <span className='cost-money-symbol'>
                                                {'{&#8381}'}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className='ticket-type'>
                                    <span className='ticket-type-desc'>Сидячий</span>
                                    <span className='ticket-amount-left'>88</span>
                                    <div className='cost main-cost'>
                                        <span className='cost-prefix'>от</span>
                                        <div className='cost-count-container main-cost-count-container'>
                                            <span className='cost-count main-cost-count'>
                                                3 800
                                            </span>
                                            <span className='cost-money-symbol'>
                                                {'{&#8381}'}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className='ticket-type'>
                                    <span className='ticket-type-desc'>Сидячий</span>
                                    <span className='ticket-amount-left'>88</span>
                                    <div className='cost main-cost'>
                                        <span className='cost-prefix'>от</span>
                                        <div className='cost-count-container main-cost-count-container'>
                                            <span className='cost-count main-cost-count'>
                                                3 800
                                            </span>
                                            <span className='cost-money-symbol'>
                                                {'{&#8381}'}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <footer className='ticket-footer'>
                                <div className='extra-options'>
                                    <img
                                        className='filter-secondary'
                                        src='./svg/features/wireless.svg'
                                        alt='wireless'
                                    />
                                    <img
                                        className='filter-secondary'
                                        src='./svg/features/rocket.svg'
                                        alt='rocket'
                                    />
                                    <img
                                        className='filter-secondary'
                                        src='./svg/features/cup.svg'
                                        alt='cup'
                                    />
                                </div>
                                <button type='submit' className='btn btn-choose-places'>
                                    Выбрать места
                                </button>
                            </footer>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    );
}

import React from 'react';

export default function TicketLeft() {
    return (
        <aside className='ticket-aside-left'>
            <div className='train-wrapper train-wrapper-lg'>
                <img
                    className='ic-train' src='./svg/train.svg'
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
                    <img src='./svg/arrows/arrow-station.svg' alt='arrow' />
                </li>
                <li className='train-station train-station-next'>
                    <span className='train-station-desc'>Санкт-Петербург</span>
                </li>
            </ul>
        </aside>
    );
}

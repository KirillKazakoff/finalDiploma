import React from 'react';

export default function TicketsFiltration() {
    return (
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
    );
}

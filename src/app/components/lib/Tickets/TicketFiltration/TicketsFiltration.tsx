/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import TicketFiltrationSelect from './TicketFiltrationSelect';

export default function TicketsFiltration() {
    return (
        <header className='filtration'>
            <div className='filtration-found'>
                <span className='filtration-found-desc'>найдено</span>
                <span className='filtration-found-number'>20</span>
            </div>
            <div className='filtration-sort'>
                <span className='filtration-sort-desc'>сортировать по:</span>
                <TicketFiltrationSelect />
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

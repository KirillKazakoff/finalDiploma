import React from 'react';
import SvgTurnPageLeft from '../../Svg/Actions/SvgTurnPageLeft';
import SvgTurnPageRight from '../../Svg/Actions/SvgTurnPageRight';

export default function TicketsPagination() {
    return (
        <div className='tickets-pagination'>
            <button
                className='turn-page turn-page-left pagination-container'
                type='button'
            >
                <SvgTurnPageLeft />
            </button>
            <ul className='tickets-pages'>
                <li className='tickets-page pagination-container'>1</li>
                <li className='tickets-page pagination-container'>2</li>
                <li className='tickets-page pagination-container'>3</li>
            </ul>
            <button
                className='turn-page turn-page-right pagination-container'
                type='button'
            >
                <SvgTurnPageRight />
            </button>
        </div>
    );
}

import React from 'react';

export default function CarContentHeader() {
    return (
        <header className='carriages-header framed-places'>
            <div className='carriages-numeration'>
                <span className='carriages-numeration-title'>Вагоны</span>
                <ul className='carriages-numeration-counts'>
                    <li className='carriages-numeration-count cariages-numeration-count-active'>
                        07
                    </li>
                    <li className='carriages-numeration-count'>09</li>
                </ul>
            </div>
            <span className='carriages-header-desc'>
                Нумерация вагонов начинается с головы поезда
            </span>
        </header>
    );
}

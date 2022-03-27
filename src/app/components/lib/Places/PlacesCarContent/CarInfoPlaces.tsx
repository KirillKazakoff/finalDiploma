import React from 'react';

export default function CarInfoPlaces() {
    return (
        <div className='carriage-info-content-col carriage-info-places'>
            <header className='carriage-info-content-header carriage-info-places-header'>
                <span className='carriage-info-places-desc'>Места</span>
                <span className='carriage-info-places-count'>11</span>
            </header>
            <ul className='carriage-info-content-ul carriage-info-places-types'>
                <li className='carriage-info-places-type'>
                    <span className='carriage-info-places-type-desc'>Верхние</span>
                    <span className='carriage-info-places-type-count'>3</span>
                </li>
                <li className='carriage-info-places-type'>
                    <span className='carriage-info-places-type-desc'>Нижние</span>
                    <span className='carriage-info-places-type-count'>8</span>
                </li>
            </ul>
        </div>
    );
}

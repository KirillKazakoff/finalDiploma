import React from 'react';
import PasPlace from './PasPlace/PasPlace';
import PasPlaceAddBtn from './PasPlaceAddBtn';

export default function PasPlaceDir() {
    return (
        <div className='pas-places-dir pas-places-dir-from'>
            <header className='pas-places-dir-header'>
                <span className='pas-places-dir-header-desc'>
                    Выберите места для пассажиров (Туда)
                </span>
            </header>
            <div className='pas-places-dir-content'>
                <ul className='pas-places-dir-list'>
                    <PasPlace />
                    <PasPlace />
                </ul>
                <PasPlaceAddBtn />
            </div>
        </div>
    );
}

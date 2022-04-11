import React from 'react';

export default function PasPlaceHeader() {
    return (
        <header className='pas-places-item-header'>
            <span className='pas-places-item-title'>Пассажир 1</span>
            <div className='pas-places-item-cost'>
                <span className='pas-places-item-cost-count'>800</span>
                <span className='pas-places-item-cost-symbol'>₽</span>
            </div>
        </header>
    );
}

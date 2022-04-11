import React from 'react';

type Props = { index: number; price: number };

export default function PasPlaceHeader({ index, price }: Props) {
    return (
        <header className='pas-places-item-header'>
            <span className='pas-places-item-title'>{`Пассажир ${index + 1}`}</span>
            <div className='pas-places-item-cost'>
                <span className='pas-places-item-cost-count'>{price}</span>
                <span className='pas-places-item-cost-symbol'>₽</span>
            </div>
        </header>
    );
}

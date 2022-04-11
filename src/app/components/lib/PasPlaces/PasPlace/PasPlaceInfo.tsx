import React from 'react';

type Props = { carNumber: number; seat_number: number };

export default function PasPlaceInfo({ carNumber, seat_number }: Props) {
    return (
        <div className='pas-places-item-place-info'>
            <div className='pas-places-item-place-info-item'>
                <span className='pas-places-item-place-info-desc'>Вагон</span>
                <span className='pas-places-item-place-info-count'>{carNumber}</span>
            </div>
            <div className='pas-places-item-place-info-item'>
                <span className='pas-places-item-place-info-desc'>Место</span>
                <span className='pas-places-item-place-info-count'>{seat_number}</span>
            </div>
        </div>
    );
}

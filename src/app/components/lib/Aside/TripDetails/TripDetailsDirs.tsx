import React from 'react';
import TripDir from './TripDir';
import TripTitle from './TripTitle';

export default function TripDetailsDirs() {
    return (
        <div className='aside-part aside-part-trip'>
            <TripTitle />
            <TripDir dir='to' desc='Туда' />
            <TripDir dir='from' desc='Обратно' />
        </div>
    );
}

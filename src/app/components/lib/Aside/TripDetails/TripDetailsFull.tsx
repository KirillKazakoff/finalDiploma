import React from 'react';
import TripTitle from './TripTitle';
import TripDir from './TripDir';
import TripPassengers from './TripPassengers';
import TripTotal from './TripTotal';

export default function TripDetails() {
    return (
        <div className='aside-part aside-part-trip'>
            <TripTitle />
            <TripDir dir='to' desc='Туда' />
            <TripDir dir='from' desc='Обратно' />
            <TripPassengers />
            <TripTotal />
        </div>
    );
}

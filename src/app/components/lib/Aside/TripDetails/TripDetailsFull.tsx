import React from 'react';
import TripTitle from './TripTitle';
import TripDir from './TripDir';
import TripPassengers from './TripPassengers';
import TripTotal from './TripTotal';

export default function TripDetailsFull() {
    return (
        <div className='aside-part aside-part-trip'>
            <TripTitle />
            <TripDir
                dir='to' desc='Туда'
                date='20.05.2022'
            />
            <TripDir
                dir='from' desc='Обратно'
                date='20.05.2022'
            />
            <TripPassengers />
            <TripTotal />
        </div>
    );
}

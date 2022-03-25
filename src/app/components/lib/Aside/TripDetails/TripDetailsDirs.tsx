import React from 'react';
import TripDir from './TripDir/TripDir';
import TripTitle from './TripTitle';

export default function TripDetailsDirs() {
    return (
        <div className='aside-part aside-part-trip'>
            <TripTitle />
            <TripDir
                dir='to' desc='Туда'
                date='20.05.2022'
            />
            <TripDir
                dir='from' desc='Обратно'
                date='22.05.2022'
            />
        </div>
    );
}

import React from 'react';
import SubtleContainerDir from './SubtleContainerDir';
import TripDetailsDestination from './TripDetailsDestination';
import TripDetailsTrain from './TripDetailsTrain';

type Props = { dir: 'to' | 'from'; desc: string; date: string };

export default function TripDir({ dir, desc, date }: Props) {
    return (
        <SubtleContainerDir
            dir={dir} desc={desc}
            date={date}
        >
            <div className='trip-details'>
                <TripDetailsTrain />
                <TripDetailsDestination dir={dir} />
            </div>
        </SubtleContainerDir>
    );
}

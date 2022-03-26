import React from 'react';
import SubtleContainerDir from './SubtleContainerDir';
import TripDirDestination from './TripDirDestination';
import TripDirTrain from './TripDirTrain';
import { formatDateNumber } from '../../../Search/SearchDate/formatDate';
import { TripDirProps } from '../../../../../types/typesTripDetails';

export default function TripDir({ dir, desc, route }: TripDirProps) {
    if (!route) return null;

    return (
        <SubtleContainerDir
            dir={dir}
            desc={desc}
            date={formatDateNumber(route.from.datetime)}
        >
            <div className='trip-details'>
                <TripDirTrain route={route} />
                <TripDirDestination dir={dir} route={route} />
            </div>
        </SubtleContainerDir>
    );
}

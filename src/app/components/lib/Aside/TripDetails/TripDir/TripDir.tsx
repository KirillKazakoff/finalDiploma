import React from 'react';
import SubtleContainerDir from './SubtleContainerDir';
import TripDirDestination from './TripDirDestination';
import TripDirTrain from './TripDirTrain';
import { formatDateNumber } from '../../../Search/SearchDate/formatDate';
import { TripDirProps } from '../../../../../types/typesTripDetails';
import TripDirPassengers from './TripDirPassengers';

export default function TripDir(props: TripDirProps) {
    const {
        route, dir, desc, pasPlaces,
    } = props;
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
            <TripDirPassengers pasPlaces={pasPlaces} />
        </SubtleContainerDir>
    );
}

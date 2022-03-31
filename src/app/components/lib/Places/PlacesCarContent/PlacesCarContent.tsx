import React from 'react';
import CarContentHeader from './CarContentHeader';

import { DirTProp } from '../../../../types/typesPlaces';
import { useActiveInfo } from './useActiveInfo';
import CarInfo from './CarInfo/CarInfo';
import { mapDirToRoot } from '../PlacesCarTypes/mapName';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { mapSchemes } from '../CarriageSchemes/mapSchemes';

export default function PlacesCarContent({ dir }: DirTProp) {
    const route = mapDirToRoot(dir);
    const { numbers, onClick } = useActiveInfo(dir);
    const car = useAppSelector((state) => state.places.routes[route].activeCar);

    if (!car) return null;
    const CarriageScheme = mapSchemes(car.coach.class_type);
    return (
        <section className='places-section places-section-carriages'>
            <CarContentHeader
                numbers={numbers}
                onClick={onClick}
                active={car.carNumber}
            />

            <CarInfo car={car} route={route} />
            <CarriageScheme car={car} route={route} />
        </section>
    );
}

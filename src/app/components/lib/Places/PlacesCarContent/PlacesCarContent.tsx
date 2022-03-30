import React from 'react';
import CarriageFirst from '../CarriageSchemes/CarriageFirst';
import CarriageFourth from '../CarriageSchemes/CarriageFourth';
import CarriageSecond from '../CarriageSchemes/CarriageSecond';
import CarriageThird from '../CarriageSchemes/CarriageThird';
import CarContentHeader from './CarContentHeader';

import { DirTProp } from '../../../../types/typesPlaces';
import { useActiveInfo } from './useActiveInfo';
import CarInfo from './CarInfo/CarInfo';
import { mapDirToRoot } from '../PlacesCarTypes/mapName';
import { useAppSelector } from '../../../../redux/reduxHooks';

export default function PlacesCarContent({ dir }: DirTProp) {
    const route = mapDirToRoot(dir);
    const { numbers, onClick } = useActiveInfo(dir);
    const car = useAppSelector((state) => state.places.routes[route].activeCar);

    if (!car) return null;
    return (
        <section className='places-section places-section-carriages'>
            <CarContentHeader
                numbers={numbers}
                onClick={onClick}
                active={car.carNumber}
            />

            <CarInfo car={car} route={route} />
            <CarriageSecond />
            <CarriageThird />
            <CarriageFirst />
            <CarriageFourth />
        </section>
    );
}

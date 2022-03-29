import React, { useState, useEffect } from 'react';
import CarriageFirst from '../CarriageSchemes/CarriageFirst';
import CarriageFourth from '../CarriageSchemes/CarriageFourth';
import CarriageSecond from '../CarriageSchemes/CarriageSecond';
import CarriageThird from '../CarriageSchemes/CarriageThird';
import CarContentHeader from './CarContentHeader';

import CarSelectedAmount from './CarSelectedAmount';
import { DirTProp } from '../../../../types/typesPlaces';
import { useActiveInfo } from './useActiveInfo';
import CarInfo from './CarInfo/CarInfo';

export default function PlacesCarContent({ dir }: DirTProp) {
    const { cars, carType } = useActiveInfo(dir);
    const numbers = cars.map((car) => car.carNumber);
    const [activeCar, setCar] = useState(cars[0]);

    useEffect(() => {
        setCar(cars[0]);
    }, [carType]);

    const onClick = (count: number) => () => {
        setCar(cars[count - 1]);
    };

    console.log(activeCar);

    return (
        <section className='places-section places-section-carriages'>
            <CarContentHeader numbers={numbers} onClick={onClick} />

            <CarInfo car={activeCar} />
            <CarSelectedAmount />
            <CarriageSecond />
            <CarriageThird />
            <CarriageFirst />
            <CarriageFourth />
        </section>
    );
}

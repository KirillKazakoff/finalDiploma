import React, { useState, useEffect } from 'react';
import CarriageFirst from '../CarriageSchemes/CarriageFirst';
import CarriageFourth from '../CarriageSchemes/CarriageFourth';
import CarriageSecond from '../CarriageSchemes/CarriageSecond';
import CarriageThird from '../CarriageSchemes/CarriageThird';
import CarActiveNumber from './CarActiveNumber';
import CarContentHeader from './CarContentHeader';

import CarSelectedAmount from './CarSelectedAmount';
import { DirTProp } from '../../../../types/typesPlaces';
import { useActiveInfo } from './useActiveInfo';
import CarInfo from './CarInfo';

export default function PlacesCarContent({ dir }: DirTProp) {
    const { cars, carType } = useActiveInfo(dir);
    const numbers = cars.map((car) => car.carNumber);
    const firstCar = cars[0].carNumber;
    const [active, setActive] = useState(firstCar);
    const activeCar = cars.find((car) => car.carNumber === active);

    useEffect(() => {
        setActive(firstCar);
    }, [carType]);

    console.log(activeCar);

    return (
        <section className='places-section places-section-carriages'>
            <CarContentHeader
                numbers={numbers} active={active}
                setActive={setActive}
            />

            <CarInfo active={active} />
            <CarSelectedAmount />
            <CarriageSecond />
            <CarriageThird />
            <CarriageFirst />
            <CarriageFourth />
        </section>
    );
}

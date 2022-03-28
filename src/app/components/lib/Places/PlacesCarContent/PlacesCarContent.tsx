import React, { useState, useEffect } from 'react';
import CarriageFirst from '../CarriageSchemes/CarriageFirst';
import CarriageFourth from '../CarriageSchemes/CarriageFourth';
import CarriageSecond from '../CarriageSchemes/CarriageSecond';
import CarriageThird from '../CarriageSchemes/CarriageThird';
import CarActiveNumber from './CarActiveNumber';
import CarContentHeader from './CarContentHeader';
import CarExtras from './CarExtras';
import CarInfoCost from './CarInfoCost';
import CarInfoPlaces from './CarInfoPlaces';
import CarSelectedAmount from './CarSelectedAmount';
import { DirTProp } from '../../../../types/typesPlaces';
import { useActiveInfo } from './useActiveInfo';

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
            <div className='carriage-info'>
                <CarActiveNumber active={active} />
                <div className='carriage-info-content'>
                    <CarInfoPlaces />
                    <CarInfoCost />
                    <CarExtras />
                </div>
            </div>
            <CarSelectedAmount />

            <CarriageSecond />
            <CarriageThird />
            <CarriageFirst />
            <CarriageFourth />
        </section>
    );
}

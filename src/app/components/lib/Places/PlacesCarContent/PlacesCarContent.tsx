import React from 'react';
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
    const coaches = useActiveInfo(dir);
    console.log(coaches);

    return (
        <section className='places-section places-section-carriages'>
            <CarContentHeader />
            <div className='carriage-info'>
                <CarActiveNumber />
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

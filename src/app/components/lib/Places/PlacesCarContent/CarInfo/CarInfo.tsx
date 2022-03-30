import React from 'react';
import { CarInfoProps } from '../../../../../types/typesPlaces';
import CarActiveNumber from '../CarActiveNumber';
import CarInfoContentPlaces from './CarInfoContentPlaces';
import CarInfoContentHeader from './CarInfoContentHeader';
import CarInfoContentServices from './CarInfoContentServices/CarInfoContentServices';

export default function CarInfo({ car, route }: CarInfoProps) {
    const { carNumber, seatsInfo, coach } = car;
    const { total } = seatsInfo.available;

    return (
        <div className='carriage-info'>
            <CarActiveNumber active={carNumber} />
            <div className='carriage-info-content'>
                <div className='carriage-content'>
                    <div className='carriage-info-content'>
                        <CarInfoContentHeader total={total} />
                        <CarInfoContentPlaces car={car} />
                    </div>
                    <CarInfoContentServices coach={coach} route={route} />
                </div>
            </div>
        </div>
    );
}

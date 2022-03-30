import React, { useEffect } from 'react';
import { CarInfoProps } from '../../../../../types/typesPlaces';
import CarActiveNumber from '../CarActiveNumber';
import CarInfoContentPlaces from './CarInfoContentPlaces';
import CarInfoContentHeader from './CarInfoContentHeader';
import CarInfoContentServices from './CarInfoContentServices/CarInfoContentServices';
import { useAppDispatch } from '../../../../../redux/reduxHooks';
import { refreshPrice } from '../../../../../redux/slices/placesSlice';

export default function CarInfo({ car, route }: CarInfoProps) {
    const dispatch = useAppDispatch();
    const { carNumber, seatsInfo, coach } = car;
    const { total } = seatsInfo.available;
    useEffect(() => {
        dispatch(refreshPrice(route));
    }, [car]);

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

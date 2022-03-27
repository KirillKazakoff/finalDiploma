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
import useActiveInfo from './useActiveInfo';
import { useAppSelector } from '../../../../redux/reduxHooks';
import { mapDirToRoot } from '../PlacesCarTypes/mapName';

export default function PlacesCarContent({ dir }: DirTProp) {
    // const info = useActiveInfo(dir);
    // const cars = info.trainInfo.seatsTrainInfo.filter((coach) => {
    //     return coach.coach.class_type === carriageType;
    // });
    // console.log(info);

    const name = mapDirToRoot(dir);
    const carType = useAppSelector((state) => state.places.routes[name].carriageType);

    const infoT = useAppSelector((state) => state.places.activeTicket.trainsInfo.find((info) => {
        return info.routeName === name;
    }));

    const coaches = infoT.trainInfo.seatsTrainInfo.filter((coach) => {
        return coach.coach.class_type === carType;
    });
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

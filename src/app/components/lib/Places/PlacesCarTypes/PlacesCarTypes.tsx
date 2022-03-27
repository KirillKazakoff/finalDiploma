import React from 'react';
import { RouteProp, SeatsInfoProp } from '../../../../types/typesPlaces';
import PlacesCarType from './PlacesCarType';

export default function PlacesCarTypes(props: RouteProp & SeatsInfoProp) {
    const { seatsInfo, route } = props;
    const carTypes = Object.keys(seatsInfo.trainInfo.typesInfo).map((carType) => {
        return <PlacesCarType dispatchName={carType} key={carType} />;
    });

    // console.log(seatsInfo);
    // console.log(carTypes);
    return (
        <section className='places-section places-section-carriage'>
            <h2 className='places-section-title framed-places'>Тип вагона</h2>
            <ul className='carriage-types'>{carTypes}</ul>
        </section>
    );
}

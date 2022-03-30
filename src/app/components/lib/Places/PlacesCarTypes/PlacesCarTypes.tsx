import React from 'react';
import { DirTProp, SeatsInfoProp } from '../../../../types/typesPlaces';
import PlacesCarType from './PlacesCarType';

export default function PlacesCarTypes(props: DirTProp & SeatsInfoProp) {
    const { seatsInfo, dir } = props;
    const carTypes = Object.keys(seatsInfo.trainInfo.typesInfo).map((carType) => {
        return (
            <PlacesCarType
                dispatchName={carType} key={carType}
                dir={dir}
            />
        );
    });

    return (
        <section className='places-section places-section-carriage'>
            <h2 className='places-section-title framed-places'>Тип вагона</h2>
            <ul className='carriage-types'>{carTypes}</ul>
        </section>
    );
}

import React from 'react';
import { DirTProp, SeatsInfoProp } from '../../../../types/typesPlaces';
import PlacesCarType from './PlacesCarType';

export default function PlacesCarTypes(props: DirTProp & SeatsInfoProp) {
    const { seatsInfo, dir } = props;
    const carTypes = Object.entries(seatsInfo.trainInfo.typesInfo).map(
        ([carType, value]) => {
            if (value.total === 0) return null;
            return (
                <PlacesCarType
                    dispatchName={carType} key={carType}
                    dir={dir}
                />
            );
        },
    );

    return (
        <section className='places-section places-section-carriage'>
            <h2 className='places-section-title framed-places'>Тип вагона</h2>
            <ul className='carriage-types'>{carTypes}</ul>
        </section>
    );
}

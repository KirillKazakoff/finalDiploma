import React from 'react';
import { DirTProp } from '../../../types/typesPlaces';
import { PlaceT } from '../../../types/typesSlices';
import PasPlace from './PasPlace/PasPlace';
import PasPlaceDirAddBtn from './PasPlaceDirAddBtn';
import PasPlaceDirHeader from './PasPlaceDirHeader';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectExtras } from '../../../redux/slices/placesSlice';

type Props = { places: PlaceT[] } & DirTProp;

export default function PasPlaceDir({ dir, places }: Props) {
    const route = dir === 'to' ? 'departure' : 'arrival';
    const extras = useAppSelector(selectExtras(route));

    if (places.length === 0) return null;
    if (!extras) return null;

    const placesList = places.map((place, index) => (
        <PasPlace
            key={place.id} place={place}
            index={index} extras={extras}
            dir={dir}
        />
    ));

    return (
        <div className='pas-places-dir pas-places-dir-from'>
            <PasPlaceDirHeader dir={dir} />

            <div className='pas-places-dir-content'>
                <ul className='pas-places-dir-list'>{placesList}</ul>
                <PasPlaceDirAddBtn dir={dir} />
            </div>
        </div>
    );
}

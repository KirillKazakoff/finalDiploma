import React from 'react';
import PlacesCarContent from './PlacesCarContent';
import PlacesCarTypes from './PlacesCarTypes/PlacesCarTypes';
import PlacesHeader from './PlacesHeader/PlacesHeader';
import PlacesQuantity from './PlacesQuantity';
import { DirProp, SeatsInfoProp } from '../../../types/typesPlaces';

type PlacesDirProps = DirProp & SeatsInfoProp;
export default function PlacesDir({ dir, route, seatsInfo }: PlacesDirProps) {
    if (!route) return null;

    return (
        <div className={`places-container places-container-${dir}`}>
            <PlacesHeader dir={dir} route={route} />
            <PlacesQuantity />
            <PlacesCarTypes route={route} seatsInfo={seatsInfo} />
            <PlacesCarContent />
        </div>
    );
}

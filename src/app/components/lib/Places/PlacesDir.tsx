import React from 'react';
import PlacesCarContent from './PlacesCarContent';
import PlacesCarTypes from './PlacesCarTypes';
import PlacesHeader from './PlacesHeader/PlacesHeader';
import PlacesQuantity from './PlacesQuantity';

type Props = { dir: string };
export default function PlacesDir({ dir }: Props) {
    return (
        <div className={`places-container places-container-${dir}`}>
            <PlacesHeader dir={dir} />
            <PlacesQuantity />
            <PlacesCarTypes />
            <PlacesCarContent />
        </div>
    );
}

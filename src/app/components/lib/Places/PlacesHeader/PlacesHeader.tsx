import React from 'react';
import { DirProp } from '../../../../types/typesPlaces';
import PlacesOtherTrain from './PlacesOtherTrain';
import PlacesTicketInfo from './PlacesTicketInfo';

export default function PlacesHeader({ dir, route }: DirProp) {
    return (
        <header className='places-header-section'>
            <PlacesOtherTrain dir={dir} />
            <h2 className='places-section-title places-section-title-info framed-places'>
                Информация о маршруте
            </h2>
            <PlacesTicketInfo dir={dir} route={route} />
        </header>
    );
}

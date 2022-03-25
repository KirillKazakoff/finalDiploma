import React from 'react';
import PlacesOtherTrain from './PlacesOtherTrain';
import PlacesTicketInfo from './PlacesTicketInfo';

type Props = { dir: string };

export default function PlacesHeader({ dir }: Props) {
    return (
        <header className='places-header-section'>
            <PlacesOtherTrain dir={dir} />
            <PlacesTicketInfo dir={dir} />
        </header>
    );
}

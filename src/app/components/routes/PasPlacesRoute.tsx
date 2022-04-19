import React from 'react';
import PasPlaceDir from '../lib/PasPlaces/PasPlaceDir';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectPlaces } from '../../redux/slices/placesSlice';
import PasPlacesForm from '../lib/PasPlaces/PasPlacesForm';
import { useRemoveDepricated } from '../lib/PasPlaces/useRemoveDepricated';

export default function PasPlacesRoute() {
    const { routes } = useAppSelector(selectPlaces);
    const { departure, arrival } = routes;

    useRemoveDepricated();

    return (
        <main className='main main-central main-pas-places framed'>
            <div className='pas-places-dirs'>
                <PasPlaceDir dir='to' places={departure.places} />
                <PasPlaceDir dir='from' places={arrival.places} />
                <PasPlacesForm />
            </div>
        </main>
    );
}

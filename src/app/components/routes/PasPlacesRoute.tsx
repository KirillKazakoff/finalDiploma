import React from 'react';
import BtnNextRouteNew from '../lib/Common/BtnNextRouteNew';
import PasPlaceDir from '../lib/PasPlaces/PasPlaceDir';

export default function PasPlacesRoute() {
    return (
        <main className='main main-central main-pas-places framed'>
            <div className='pas-places-dirs'>
                <PasPlaceDir />
                <PasPlaceDir />
                <BtnNextRouteNew cls='pas-places' />
            </div>
        </main>
    );
}

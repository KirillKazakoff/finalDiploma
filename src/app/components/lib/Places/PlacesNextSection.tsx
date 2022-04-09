import React from 'react';
import BtnNextRoute from '../Common/BtnNextRoute';
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';

export default function PlacesNextSection() {
    const length = useAppSelector(selectPlacesLength);
    let disabled = true;
    if (length > 0) {
        disabled = false;
    }

    return (
        <div className='places-next-route-wrapper'>
            <BtnNextRoute to='/passengers' disabled={disabled} />
        </div>
    );
}

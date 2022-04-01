import React from 'react';
import BtnNextRoute from '../Common/BtnNextRoute';
import { useAppSelector } from '../../../redux/reduxHooks';

export default function PlacesNextSection() {
    const { arrival, departure } = useAppSelector((state) => state.places.routes);
    let disabled = true;
    if (arrival.places.length > 0 || departure.places.length > 0) {
        disabled = false;
    }
    return <BtnNextRoute to='/passengers' disabled={disabled} />;
}

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectRoutes = (state: RootState) => state.places.routes;

export const selectPlacesLength = createSelector([selectRoutes], (routes) => {
    const { arrival, departure } = routes;
    const biggest = arrival.places.length > departure.places.length ? arrival : departure;
    const placesLength = {
        departure: departure.places.length,
        arrival: arrival.places.length,
        total: arrival.places.length + departure.places.length,
        biggest: biggest.places.length,
    };
    return placesLength;
});

export const selectPlacesLengthArr = createSelector([selectPlacesLength], ({ total }) => {
    const lengthArr = [];
    for (let i = 0; i < total; i += 1) {
        lengthArr.push(i);
    }

    return lengthArr;
});

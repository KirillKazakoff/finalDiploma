import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectRoutes = (state: RootState) => state.places.routes;

export const selectPlacesLength = createSelector([selectRoutes], (routes) => {
    const { arrival, departure } = routes;
    return arrival.places.length + departure.places.length;
});

export const selectPlacesLengthArr = createSelector([selectPlacesLength], (length) => {
    const lengthArr = [];
    for (let i = 0; i < length; i += 1) {
        lengthArr.push(i);
    }

    return lengthArr;
});

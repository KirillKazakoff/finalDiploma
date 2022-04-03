import { RootState } from '../../store';

export const selectPlacesLength = (state: RootState) => {
    const { arrival, departure } = state.places.routes;
    return arrival.places.length + departure.places.length;
};

export const selectPlacesLengthArr = (state: RootState) => {
    const length = selectPlacesLength(state);
    const lengthArr = [];
    for (let i = 0; i < length; i += 1) {
        lengthArr.push(i);
    }

    return lengthArr;
};

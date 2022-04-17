import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks';
import { selectPasPlaces, removePasPlace } from '../../../redux/slices/pasPlacesSlice';
import { selectPlaces } from '../../../redux/slices/placesSlice';

export const useRemoveDepricated = () => {
    const dispatch = useAppDispatch();
    const places = useAppSelector(selectPlaces);
    const pasplaces = useAppSelector(selectPasPlaces);

    const removeDepricated = (route: string) => {
        pasplaces[route].forEach((pasPlace) => {
            const found = places.routes[route].places.some(
                (place) => place.id === pasPlace.placeId,
            );
            if (!found) {
                dispatch(removePasPlace({ name: route, value: pasPlace }));
            }
        });
    };

    useEffect(() => {
        removeDepricated('arrival');
        removeDepricated('departure');
    }, []);
};

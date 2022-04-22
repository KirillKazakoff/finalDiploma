/* eslint-disable no-param-reassign */
import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPasPlaces } from '../../../redux/slices/pasPlacesSlice';
import { selectPlaces } from '../../../redux/slices/placesSlice';
import { CarContentT } from '../../../types/typesSlices';
import { AgesT, initAges } from '../Passengers/checkAges';
import type { EmptyPlaceT } from './PasPlacesForm';

export const useCheckPasPlaces = () => {
    const pasPlaces = useAppSelector(selectPasPlaces);
    const { routes } = useAppSelector(selectPlaces);

    const getEmptyPlaces = (route: CarContentT, key: string) => {
        const emptyPlaces = route.places.reduce<EmptyPlaceT[]>((total, place, index) => {
            const check = pasPlaces[key].some((pasInfo) => {
                return pasInfo.placeId === place.id;
            });

            const routeRus = key === 'departure' ? 'Туда' : 'Обратно';
            if (!check) total.push({ index: index + 1, route: routeRus });
            return total;
        }, []);

        return emptyPlaces;
    };

    const allEmpty = Object.entries(routes).reduce<EmptyPlaceT[]>(
        (total, [key, route]) => {
            const routeEmpty = getEmptyPlaces(route, key);
            total.push(...routeEmpty);
            return total;
        },
        [],
    );

    const checkAge = (key: string) => {
        if (!pasPlaces[key]) return true;

        const ages = pasPlaces[key].reduce<AgesT>(
            (total, pasInfo) => {
                const { is_adult } = pasInfo.person_info;
                if (is_adult) {
                    total.adults += 1;
                } else {
                    total.microPeople += 1;
                }
                return total;
            },
            { ...initAges },
        );

        const { microPeople, adults } = ages;
        if (microPeople / adults > 3) return false;
        return true;
    };

    const isValidAge = checkAge('departure') && checkAge('arrival');
    const isValid = allEmpty.length === 0;
    const allValid = isValid && isValidAge;

    return {
        isValid, allEmpty, isValidAge, allValid,
    };
};

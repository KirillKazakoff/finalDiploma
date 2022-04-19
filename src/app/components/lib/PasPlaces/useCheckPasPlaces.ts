import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPasPlaces } from '../../../redux/slices/pasPlacesSlice';
import { selectPlaces } from '../../../redux/slices/placesSlice';
import { CarContentT } from '../../../types/typesSlices';
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

    const isValid = allEmpty.length === 0;

    return { isValid, allEmpty };
};

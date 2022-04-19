import { useAppSelector } from '../../../redux/reduxHooks';
import { selectPlacesLength } from '../../../redux/slices/utils/selectPlacesLength';
import { selectActiveTicket } from '../../../redux/slices/placesSlice';

export const useCheckPlaces = () => {
    const placesLength = useAppSelector(selectPlacesLength);
    const { ticketRoute } = useAppSelector(selectActiveTicket);

    let isValid = false;
    let routeError = '';

    if (placesLength.total > 0) {
        isValid = true;
    }
    if (ticketRoute.arrival && placesLength.arrival === 0) {
        isValid = false;
        routeError = 'Обратно';
    }
    if (placesLength.departure === 0) {
        isValid = false;
        routeError = 'Туда';
    }

    return { isValid, routeError };
};

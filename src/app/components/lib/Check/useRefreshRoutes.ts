import { useAppDispatch } from '../../../redux/reduxHooks';
import { refreshLast } from '../../../redux/slices/lastTicketsSlice';
import { setOrderSuccess } from '../../../redux/slices/locationsSlice';
import { refreshPasPlaces } from '../../../redux/slices/pasPlacesSlice';
import { refreshPassengers } from '../../../redux/slices/passengersSlice';
import { refreshPayFields } from '../../../redux/slices/paymentFieldsSlice';
import { refreshPaymentForm } from '../../../redux/slices/paymentFormSlice';
import { refreshPlaces } from '../../../redux/slices/placesSlice';
import { refreshDate } from '../../../redux/slices/searchDateSlice';
import { refreshFilter } from '../../../redux/slices/searchFilterSlice';
import { refreshWays } from '../../../redux/slices/searchWaySlice';
import { refreshTickets } from '../../../redux/slices/ticketsSlice';

export const useRefreshRoutes = () => {
    const dispatch = useAppDispatch();

    const refreshAll = () => {
        // dispatch(refreshDate());
        // dispatch(refreshWays());
        // dispatch(refreshLast());
        // dispatch(refreshFilter());
        // dispatch(refreshPasPlaces());
        // dispatch(refreshPlaces());
        dispatch(setOrderSuccess());
        dispatch(refreshPaymentForm());
        // dispatch(refreshLocations());
    };

    return refreshAll;
};

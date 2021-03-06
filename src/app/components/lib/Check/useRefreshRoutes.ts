import { useAppDispatch } from '../../../redux/reduxHooks';
import { refreshLast } from '../../../redux/slices/lastTicketsSlice';
import { refreshPasPlaces } from '../../../redux/slices/pasPlacesSlice';
import { refreshPaymentForm } from '../../../redux/slices/paymentFormSlice';
import { refreshPlaces } from '../../../redux/slices/placesSlice';
import { refreshDate } from '../../../redux/slices/searchDateSlice';
import { refreshFilter } from '../../../redux/slices/searchFilterSlice';
import { refreshWays } from '../../../redux/slices/searchWaySlice';
import { refreshSubscribe } from '../../../redux/slices/subscribeSlice';

export const useRefreshRoutes = () => {
    const dispatch = useAppDispatch();

    const refreshAll = () => {
        dispatch(refreshDate());
        dispatch(refreshWays());
        dispatch(refreshLast());
        dispatch(refreshFilter());
        dispatch(refreshPasPlaces());
        dispatch(refreshPlaces());
        dispatch(refreshPaymentForm());
        dispatch(refreshSubscribe());
    };

    return refreshAll;
};

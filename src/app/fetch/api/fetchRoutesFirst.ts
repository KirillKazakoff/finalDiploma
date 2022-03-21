import { setPageStatus } from '../../redux/slices/loaderSlice';
import { FetchRoutesT, fetchRoutes } from './fetchRoutes';

export const fetchRoutesFirst: FetchRoutesT = (settings) => async (dispatch) => {
    dispatch(setPageStatus('loading'));
    dispatch(fetchRoutes(settings));

    return true;
};

/* eslint-disable camelcase */
import { setFetchStatus } from '../../redux/slices/searchFormSlice';
import { setTickets } from '../../redux/slices/ticketsSlice';
import { AppThunk } from '../../redux/store';
import { getRoutesUrl } from '../getUrl';
import { request } from '../thunkUtils';

type FetchRoutesT = (settings: any) => AppThunk;

export const fetchRoutes: FetchRoutesT = (settings) => async (dispatch) => {
    dispatch(setFetchStatus('loading'));

    const url = getRoutesUrl(settings);
    const reqObj = { url };
    const resData = await dispatch(request(reqObj, setFetchStatus));
    if (!resData) {
        console.log('uhhh');
        return false;
    }

    // console.log(resData);
    dispatch(setTickets(resData));
    dispatch(setFetchStatus('loaded'));
    return true;
};

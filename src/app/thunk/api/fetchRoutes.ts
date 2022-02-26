/* eslint-disable camelcase */
import { setFetchStatus } from '../../redux/slices/searchFormSlice';
import { AppThunk } from '../../redux/store';
import { getRoutesUrl } from '../getUrl';
import { request } from '../thunkUtils';

type FetchRoutesT = (from_city_id: string, to_city_id: string) => AppThunk;

export const fetchRoutes: FetchRoutesT = (from_city_id, to_city_id) => async (dispatch) => {
    dispatch(setFetchStatus('loading'));

    const url = getRoutesUrl({ from_city_id, to_city_id });
    const reqObj = { url };
    const resData = await dispatch(request(reqObj, setFetchStatus));
    if (!resData) return false;

    dispatch(setFetchStatus('loaded'));
    return true;
};

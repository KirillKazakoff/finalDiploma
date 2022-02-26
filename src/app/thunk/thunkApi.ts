/* eslint-disable camelcase */
import { setCities, setWayStatus } from '../redux/slices/searchWaySlice';
import { AppThunk } from '../redux/store';
import { FetchStatusT } from '../types/typesPayload';
import { getCitiesUrl } from './getUrl';
import { request } from './thunkUtils';

type GetCitiesT = (inputName: string, name: string, signal: AbortSignal) => AppThunk;

export const fetchCities: GetCitiesT = (inputName, name, signal) => async (dispatch) => {
    const setStatus = (status: FetchStatusT) => setWayStatus({ inputName, status });
    dispatch(setStatus('loading'));

    const url = getCitiesUrl({ name });
    const reqObj = { url, settings: { signal } };
    const resData = await dispatch(request(reqObj, setStatus));
    if (!resData) return false;

    dispatch(setCities({ cities: resData, inputName }));
    dispatch(setStatus('loaded'));
    return true;
};

type FetchRoutesT = (from_city_id: string, to_city_id: string) => AppThunk;
export const fetchRoutes: FetchRoutesT = (from_city_id, to_city_id) => async (dispatch) => {
    console.log('hello');
};

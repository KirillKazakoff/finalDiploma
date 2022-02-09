import { setCities, setWayStatus } from '../redux/slices/searchWaySlice';
import { AppThunk } from '../redux/store';
import { getCitiesUrl, request } from './thunkUtils';
import { Status } from '../types';

type GetCitiesT = (inputName: string, name: string) => AppThunk;

export const getCities: GetCitiesT = (inputName, name) => async (dispatch) => {
    const setStatus = (status: Status) => setWayStatus({ inputName, status });
    dispatch(setStatus('loading'));

    const url = getCitiesUrl(name);

    const reqObj = { url, settings: undefined };
    const res = await dispatch(request(reqObj, setStatus));

    // add check error response block.
    if (!res) return false;

    const resData = await res.json();
    if (resData.error) return false;
    // here

    dispatch(setCities({ cities: resData, inputName }));

    dispatch(setStatus('loaded'));
    return true;
};

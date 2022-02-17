import { setCities, setWayStatus } from '../redux/slices/searchWaySlice';
import { AppThunk } from '../redux/store';
import { FetchStatusT } from '../types/typesPayload';
import { getCitiesUrl, request } from './thunkUtils';

type GetCitiesT = (inputName: string, name: string) => AppThunk;

export const fetchCities: GetCitiesT = (inputName, name) => async (dispatch) => {
    const setStatus = (status: FetchStatusT) => setWayStatus({ inputName, status });
    dispatch(setStatus('loading'));

    console.log(name);
    const url = getCitiesUrl(name);

    const reqObj = { url, settings: undefined };
    const res = await dispatch(request(reqObj, setStatus));

    // add check error response block.
    if (!res) return false;

    const resData = await res.json();
    console.log(resData);
    if (resData.error) return false;
    // here

    dispatch(setCities({ cities: resData, inputName }));

    dispatch(setStatus('loaded'));
    return true;
};

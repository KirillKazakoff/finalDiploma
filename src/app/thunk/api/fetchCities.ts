import { setWayStatus, setCities } from '../../redux/slices/searchWaySlice';
import { AppThunk } from '../../redux/store';
import { FetchStatusT } from '../../types/typesPayload';
import { getCitiesUrl } from '../getUrl';
import { request } from '../thunkUtils';

type GetCitiesT = (inputName: string, name: string, signal: AbortSignal) => AppThunk;

export const fetchCities: GetCitiesT = (inputName, name, signal) => async (dispatch) => {
    const setFetchStatus = (status: FetchStatusT) => setWayStatus({ inputName, status });
    dispatch(setFetchStatus('loading'));

    const url = getCitiesUrl({ name });
    const reqObj = { url, settings: { signal } };
    const resData = await dispatch(request(reqObj, setFetchStatus));
    if (!resData) return false;

    dispatch(setCities({ cities: resData, inputName }));
    dispatch(setFetchStatus('loaded'));
    return true;
};

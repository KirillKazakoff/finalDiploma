import { setCities } from '../redux/slices/searchWaySlice';
import { setSearchWayStatus } from '../redux/slices/statusSlice';
import { AppThunk } from '../redux/store';
import { getCitiesUrl, request } from './thunkUtils';

type GetCitiesT = (inputName: string, name: string) => AppThunk;

export const getCities: GetCitiesT = (inputName, name) => async (dispatch) => {
    const url = getCitiesUrl(name);

    const reqObj = { url, settings: undefined };
    const res = await dispatch(request(reqObj, setSearchWayStatus));

    // add check error response block.
    if (!res) return false;

    const resData = await res.json();
    if (resData.error) return false;
    // here

    dispatch(setCities({ cities: resData, inputName }));

    dispatch(setSearchWayStatus('loaded'));
    return true;
};

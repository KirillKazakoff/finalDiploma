import { setFetchStatus, setLastTickets } from '../../redux/slices/lastTicketsSlice';
import { AppThunk } from '../../redux/store';
import { request } from '../thunkUtils';

type FetchLastT = () => AppThunk;

export const fetchLast: FetchLastT = () => async (dispatch) => {
    dispatch(setFetchStatus('loading'));

    const reqObj = { url: 'last' };
    const resData = await dispatch(request(reqObj, setFetchStatus));
    if (!resData) return false;

    dispatch(setFetchStatus('loaded'));
    dispatch(setLastTickets(resData));
    return true;
};

import { setFetchStatus } from '../../redux/slices/subscribeSlice';
import { AppThunk } from '../../redux/store';
import { getSubscribeUrl } from '../getUrl';
import { request } from '../thunkUtils';

type FetchSubscribeT = (settings: any) => AppThunk;

export const fetchSubscribe: FetchSubscribeT = (settings) => async (dispatch) => {
    dispatch(setFetchStatus('loading'));
    const url = getSubscribeUrl(settings);
    const reqObj = { url };

    await dispatch(request(reqObj, setFetchStatus));
    dispatch(setFetchStatus('loaded'));
};

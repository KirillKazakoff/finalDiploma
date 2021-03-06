import { setBlured, setFetchStatus, setInput } from '../../redux/slices/subscribeSlice';
import { AppThunk } from '../../redux/store';
import { RequestObj } from '../../types/typesRequest';
import { getSubscribeUrl } from '../getUrl';
import { request, timeoutMock } from '../thunkUtils';

type FetchSubscribeT = (settings: any) => AppThunk;

export const fetchSubscribe: FetchSubscribeT = (settings) => async (dispatch) => {
    dispatch(setFetchStatus('loading'));
    const url = getSubscribeUrl(settings);
    const reqObj: RequestObj = { url, settings: { method: 'POST' } };

    await dispatch(request(reqObj, setFetchStatus));

    await timeoutMock(1000);
    dispatch(setInput({ name: 'subscribe', value: '' }));
    dispatch(setBlured({ name: 'subscribe', wasFocused: false }));
    dispatch(setFetchStatus('loaded'));
};

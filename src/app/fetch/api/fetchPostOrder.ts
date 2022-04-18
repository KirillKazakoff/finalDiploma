import { setFetchStatus } from '../../redux/slices/paymentFormSlice';
import { AppThunk } from '../../redux/store';
import { RequestObj } from '../../types/typesRequest';
import { getPostOrderUrl } from '../getUrl';
import { selectOrder } from '../../redux/slices/utils/selectOrder';
import { request, timeoutMock } from '../thunkUtils';
import { setPageStatus } from '../../redux/slices/loaderSlice';

type FetchT = () => AppThunk<Promise<boolean>>;

export const fetchPostOrder: FetchT = () => async (dispatch, getState) => {
    dispatch(setFetchStatus('loading'));
    dispatch(setPageStatus('loading'));

    const url = getPostOrderUrl();
    const orderInfo = selectOrder(getState());

    const json = JSON.stringify(orderInfo);

    const reqObj: RequestObj = {
        url,
        settings: {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: json,
        },
    };

    await timeoutMock(2500);
    await dispatch(request(reqObj, setFetchStatus));

    dispatch(setPageStatus('loaded'));
    dispatch(setFetchStatus('loaded'));

    return true;
};

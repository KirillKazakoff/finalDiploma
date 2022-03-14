import { setFetchStatus } from '../../redux/slices/searchFormSlice';
import { AppThunk } from '../../redux/store';
import { getSeatsUrl } from '../getUrl';
import { request } from '../thunkUtils';
import { getTrainInfo, TrainInfoT } from '../../components/lib/Tickets/getTrainInfo';

type FetchSeatsT = (settings: any) => AppThunk<Promise<false | TrainInfoT>>;

export const fetchSeats: FetchSeatsT = (settings) => async (dispatch) => {
    const url = getSeatsUrl(settings);
    const reqObj = { url };
    const resData = await dispatch(request(reqObj, setFetchStatus));
    if (!resData) {
        console.log('uhhh');
        return false;
    }
    const trainInfo = getTrainInfo(resData);
    return trainInfo;
};

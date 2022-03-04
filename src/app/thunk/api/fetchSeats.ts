import { setFetchStatus } from '../../redux/slices/searchFormSlice';
import { AppThunk } from '../../redux/store';
import { getSeatsUrl } from '../getUrl';
import { request } from '../thunkUtils';
import { CoachesSeatsT } from '../../types/models/modelSeats';
import getSeats from '../../components/lib/Tickets/getSeats';

type FetchSeatsT = (settings: any) => AppThunk<Promise<false | CoachesSeatsT>>;

export const fetchSeats: FetchSeatsT = (settings) => async (dispatch) => {
    const url = getSeatsUrl(settings);
    const reqObj = { url };
    const resData = await dispatch(request(reqObj, setFetchStatus));
    if (!resData) {
        console.log('uhhh');
        return false;
    }
    getSeats(resData);
    return resData;
};

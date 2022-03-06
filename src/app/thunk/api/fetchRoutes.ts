/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { TicketsT } from '../../types/models/modelTickets';
import { setFetchStatus } from '../../redux/slices/searchFormSlice';
import { setTickets } from '../../redux/slices/ticketsSlice';
import { AppThunk } from '../../redux/store';
import { getRoutesUrl } from '../getUrl';
import { request } from '../thunkUtils';
import { fetchSeats } from './fetchSeats';

type FetchRoutesT = (settings: any) => AppThunk;

export const fetchRoutes: FetchRoutesT = (settings) => async (dispatch) => {
    dispatch(setFetchStatus('loading'));

    const url = getRoutesUrl(settings);
    const reqObj = { url };
    const resData: TicketsT = await dispatch(request(reqObj, setFetchStatus));
    if (!resData) {
        console.log('uhhh');
        return false;
    }

    for await (const item of resData.items) {
        const { departure, arrival } = item;
        const idArr = [departure._id];

        if (arrival) idArr.push(arrival._id);
        for await (const id of idArr) {
            const seats = await dispatch(fetchSeats({ id }));
            if (!seats) return false;

            console.log(seats);
        }
    }

    dispatch(setTickets(resData));
    dispatch(setFetchStatus('loaded'));
    return true;
};

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

import { TicketsT } from '../../types/models/modelTickets';
import { setFetchStatus } from '../../redux/slices/searchFormSlice';
import { setTickets } from '../../redux/slices/ticketsSlice';
import { AppThunk } from '../../redux/store';
import { getRoutesUrl } from '../getUrl';
import { request } from '../thunkUtils';
import { fetchSeats } from './fetchSeats';
import getMinPrices from '../../components/lib/Tickets/getMinPrices';
import { SeatsTypesInfoT } from '../../types/models/modelSeats';
import { sumAvailable } from '../../components/lib/Tickets/getTrainInfo';
import { TrainRoutesT } from '../../types/typesTicket';

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
        const available: SeatsTypesInfoT = {};
        const { departure, arrival } = item;
        const routes: TrainRoutesT = { departure, arrival };

        const routeKeys = Object.keys(routes);

        for await (const key of routeKeys) {
            const id = routes[key]._id;
            const trainInfo = await dispatch(fetchSeats({ id }));
            if (!trainInfo) return false;

            console.log(trainInfo);
            const { typesInfo } = trainInfo;
            Object.keys(typesInfo).forEach((type) => {
                sumAvailable(available, type, typesInfo[type]);
            });
        }

        const minPrices = getMinPrices(routes);
        // const ticketInfo = { minPrices, trainI };
        // console.log(ticketInfo);
    }

    dispatch(setTickets(resData));
    dispatch(setFetchStatus('loaded'));
    return true;
};
// const idArr = [departure._id];

// if (arrival) idArr.push(arrival._id);

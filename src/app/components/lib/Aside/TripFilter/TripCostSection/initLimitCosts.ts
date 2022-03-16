/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { setCost } from '../../../../../redux/slices/searchFilterSlice';
import { AppThunk } from '../../../../../redux/store';
import { TicketsResponseT } from '../../../../../types/models/modelTickets';
import { getMinPriceTrain, getMaxPriceTrain } from './initLimitUtils';

type InitLimitCostsT = (resData: TicketsResponseT) => AppThunk;

const initLimitCosts: InitLimitCostsT = (resData) => async (dispatch) => {
    let minTotal;
    let maxTotal;

    for (const item of resData.items) {
        let minTicketPrice;
        let maxTicketPrice;

        const { departure, arrival } = item;
        const routes = [departure, arrival];

        for (let i = 0; i < routes.length; i += 1) {
            const route = routes[i];
            if (!route) continue;

            const minRoutePrice = getMinPriceTrain(route.price_info);
            if (!minTicketPrice || minRoutePrice < minTicketPrice) {
                minTicketPrice = minRoutePrice;
            }

            const maxRoutePrice = getMaxPriceTrain(route.price_info);
            if (!maxTicketPrice || maxRoutePrice > maxTicketPrice) {
                maxTicketPrice = maxRoutePrice;
            }
        }

        if (!minTotal || minTicketPrice < minTotal) minTotal = minTicketPrice;
        if (!maxTotal || maxTicketPrice > maxTotal) maxTotal = maxTicketPrice;
    }

    Object.entries({ minTotal, maxTotal }).forEach(([name, price]) => {
        dispatch(setCost({ name, value: price }));
    });
};

export default initLimitCosts;

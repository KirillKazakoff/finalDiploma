/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import { TicketsResponseT } from '../../../../types/models/modelTickets';
import { AppThunk } from '../../../../redux/store';
import { getMinPriceTrain, getMaxPriceTrain } from './setInitCostUtils';

type SetInitCostT = (resData: TicketsResponseT) => AppThunk;

const setInitCost: SetInitCostT = (resData: TicketsResponseT) => async (dispatch) => {
    let minPrice;
    let maxPrice;

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

        if (!minPrice || minTicketPrice < minPrice) minPrice = minTicketPrice;
        if (!maxPrice || maxTicketPrice > maxPrice) maxPrice = maxTicketPrice;
    }
    console.log(maxPrice, minPrice);
};

export default setInitCost;

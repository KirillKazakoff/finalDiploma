/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { RootState } from './store';
import { TogglersT } from '../types/typesSlices';
import { getTrainRouteTimeMs } from '../components/lib/Tickets/Ticket/getTrainTime';
import { TrainRouteT } from '../types/models/modelTickets';
import {
    getMinPriceTrain,
    getMaxPriceTrain,
} from '../components/lib/Aside/TripFilter/TripCostSection/initLimitUtils';

export const selectFilteredTickets = (state: RootState) => {
    const {
        tickets: {
            ticketsInfo: { tickets },
        },
        searchFilter: {
            aside: { togglers, sliders },
        },
    } = state;
    const { cost, hourArrival, hourDeparture } = sliders;

    const filteredTickets = tickets.map((ticket) => {
        const {
            is_express,
            have_first_class,
            have_second_class,
            have_third_class,
            have_fourth_class,
            have_wifi,
        } = ticket.ticketRoute.departure;

        const departureInfo: TogglersT = {
            is_express,
            have_first_class,
            have_second_class,
            have_fourth_class,
            have_third_class,
            have_wifi,
        };

        const checkTogglers = Object.keys(departureInfo).reduce<boolean>(
            (total, featureKey) => {
                const checkFeatureMatch = departureInfo[featureKey] || !togglers[featureKey];
                if (!checkFeatureMatch) total = false;
                return total;
            },
            true,
        );

        const { price_info } = ticket.ticketRoute.departure;
        const minPrice = getMinPriceTrain(price_info);
        const maxPrice = getMaxPriceTrain(price_info);
        const checkCost = minPrice > cost.minTotal && maxPrice < cost.maxTotal;
    });

    return filteredTickets;
};

type CheckRouteHourT = (route: TrainRouteT, start: number, end: number) => boolean;
const checkRouteHour: CheckRouteHourT = (route, startFilter, endFilter) => {
    const { datetime: dateTimeFrom } = route.from;
    const { datetime: datetimeTo } = route.to;
    const start = getTrainRouteTimeMs(datetimeTo);
    const end = getTrainRouteTimeMs(dateTimeFrom);

    const check = start > startFilter && end < endFilter;
    return check;
};

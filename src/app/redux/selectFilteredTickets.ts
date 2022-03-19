/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { RootState } from './store';
import { TogglersT, HourStateT } from '../types/typesSlices';
import { getTrainRouteTimeMs } from '../components/lib/Tickets/Ticket/getTrainTime';
import { TicketInfoT, TrainRouteT } from '../types/models/modelTickets';
import {
    getMinPriceTrain,
    getMaxPriceTrain,
} from '../components/lib/Aside/TripFilter/TripCostSection/initLimitUtils';

type CheckHourPointT = (datetime: number, start: number, end: number) => boolean;
const checkHourPoint: CheckHourPointT = (pointDatetime, startFilter, endFilter) => {
    const msTime = getTrainRouteTimeMs(pointDatetime);

    const check = msTime > startFilter && msTime < endFilter;
    return check;
};

const checkRouteHour = (route: TrainRouteT, hourFilter: HourStateT) => {
    const { from, to } = route;
    const fromH = from.datetime;
    const toH = to.datetime;

    const {
        start_hour_from, end_hour_from, start_hour_to, end_hour_to,
    } = hourFilter;
    const checkHourFrom = checkHourPoint(fromH, start_hour_from, end_hour_from);
    const checkHourTo = checkHourPoint(toH, start_hour_to, end_hour_to);
    return checkHourFrom && checkHourTo;
};

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

    const filteredTickets = tickets.reduce<TicketInfoT[]>((total, ticket) => {
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
            (isValid, featureKey) => {
                const checkFeatureMatch = departureInfo[featureKey] || !togglers[featureKey];
                if (!checkFeatureMatch) isValid = false;
                return isValid;
            },
            true,
        );

        const { price_info } = ticket.ticketRoute.departure;
        const ticketMin = getMinPriceTrain(price_info);
        const ticketMax = getMaxPriceTrain(price_info);
        const { price_from: filterFrom, price_to: filterTo } = cost;

        const checkCost = ticketMax >= filterFrom && ticketMin <= filterTo;

        const { departure, arrival } = ticket.ticketRoute;
        const checkHourDep = checkRouteHour(departure, hourDeparture);
        const checkHourArr = arrival ? checkRouteHour(arrival, hourArrival) : true;

        if (checkTogglers && checkCost && checkHourDep && checkHourArr) {
            total.push(ticket);
        }
        return total;
    }, []);

    return filteredTickets;
};

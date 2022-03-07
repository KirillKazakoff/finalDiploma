/* eslint-disable no-param-reassign */
import type {
    SeatsTypesInfoT,
    SeatsTypesT,
    TotalSeatsInfoT,
} from '../types/models/modelSeats';
import type { PriceInfoT } from '../types/models/modelTickets';

type SumAvailableT = (
    total: SeatsTypesInfoT,
    type: string,
    available: SeatsTypesT
) => void;

export const sumAvailable: SumAvailableT = (total, type, available) => {
    if (!total[type]) {
        total[type] = available;
    } else {
        Object.keys(total[type]).forEach((key) => {
            total[type][key] += available[key];
        });
    }
};

type GetTotalSeatsInfoT = (
    minPrices: PriceInfoT,
    available: SeatsTypesInfoT
) => TotalSeatsInfoT;

export const getTotalSeatsInfo: GetTotalSeatsInfoT = (minPrices, available) => {
    const info = Object.keys(minPrices).reduce<TotalSeatsInfoT>((total, key) => {
        const minPriceType = minPrices[key];
        const availableType = available[key];
        total[key] = { minPriceType, availableType };
        return total;
    }, {});

    return info;
};

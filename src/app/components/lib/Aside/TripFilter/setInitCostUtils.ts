/* eslint-disable no-param-reassign */
import { PriceInfoCoachT, PriceInfoT } from '../../../../types/models/modelTickets';

// getMin
export const getMinCarriage = (priceInfo: PriceInfoCoachT) => {
    const minPriceCarriage = Object.keys(priceInfo).reduce<number>((min, priceKey) => {
        const nextPrice = priceInfo[priceKey];
        if (!min || nextPrice < min) min = nextPrice;

        return min;
    }, 0);

    return minPriceCarriage;
};

export const getMinPriceTrain = (priceInfo: PriceInfoT) => {
    const minPriceTrain = Object.keys(priceInfo).reduce<number>((min, carriageKey) => {
        const nextPrice = getMinCarriage(priceInfo[carriageKey]);
        if (!min || nextPrice < min) min = nextPrice;

        return min;
    }, 0);

    return minPriceTrain;
};

// getMax
export const getMaxCarriage = (priceInfo: PriceInfoCoachT) => {
    const minPriceCarriage = Object.keys(priceInfo).reduce<number>((max, priceKey) => {
        const nextPrice = priceInfo[priceKey];
        if (!max || nextPrice > max) max = nextPrice;

        return max;
    }, 0);

    return minPriceCarriage;
};

export const getMaxPriceTrain = (priceInfo: PriceInfoT) => {
    const minPriceTrain = Object.keys(priceInfo).reduce<number>((max, carriageKey) => {
        const nextPrice = getMaxCarriage(priceInfo[carriageKey]);
        if (!max || nextPrice > max) max = nextPrice;

        return max;
    }, 0);

    return minPriceTrain;
};

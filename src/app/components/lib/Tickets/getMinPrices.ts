/* eslint-disable no-param-reassign */
import { PriceInfoCoachT, PriceInfoT } from '../../../types/models/modelTickets';
import { TrainRoutesT } from '../../../types/typesTicket';

const getNochoicePrice = (minPrices: PriceInfoT) => {
    const prices = { ...minPrices };

    Object.keys(prices).forEach((carriageKey) => {
        if (carriageKey === 'first') {
            Object.keys(prices[carriageKey]).forEach((priceKey) => {
                if (priceKey !== 'price') delete prices.first[priceKey];
            });
        }
        if (carriageKey === 'fourth') {
            Object.keys(prices[carriageKey]).forEach((priceKey) => {
                if (priceKey !== 'bottom_price') delete prices.fourth[priceKey];
            });
        }
    });

    return prices;
};

const getMinPrices = (routes: TrainRoutesT) => {
    const { departure, arrival } = routes;

    const depPrices = departure.price_info;
    if (!arrival) return depPrices;

    const arrPrices = arrival.price_info;
    const minPrices = { ...arrPrices };

    Object.keys(depPrices).forEach((carriageKey) => {
        const arrObj = arrPrices[carriageKey];
        const depObj = depPrices[carriageKey];
        const minObj: PriceInfoCoachT = {};

        Object.keys(depObj).forEach((priceKey) => {
            let minPrice = depObj[priceKey];

            if (arrObj && arrObj[priceKey] < depObj[priceKey]) {
                minPrice = arrObj[priceKey];
            }
            minObj[priceKey] = minPrice;
        });

        minPrices[carriageKey] = minObj;
    });

    return getNochoicePrice(minPrices);
};

export const getMinFromTypes = (minPriceType: PriceInfoCoachT) => {
    let minPrice = 0;
    Object.keys(minPriceType).forEach((priceKey) => {
        const newMinPrice = minPriceType[priceKey];
        if (!minPrice) minPrice = newMinPrice;
        if (minPrice && newMinPrice < minPrice) {
            minPrice = newMinPrice;
        }
    });

    return minPrice;
};

export default getMinPrices;

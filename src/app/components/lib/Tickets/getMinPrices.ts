import { PriceInfoCoachT } from '../../../types/models/modelTickets';
import { TrainRoutesT } from '../../../types/typesTicket';

const getMinPrices = (routes: TrainRoutesT) => {
    const { departure, arrival } = routes;

    const depPrices = departure.price_info;
    if (!arrival) return null;

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

    return minPrices;
};

export default getMinPrices;

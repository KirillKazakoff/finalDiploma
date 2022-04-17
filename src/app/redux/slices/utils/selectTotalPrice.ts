/* eslint-disable no-param-reassign */
import { RootState } from '../../store';

export const selectTotalPrice = (state: RootState) => {
    const { arrival, departure } = state.pasPlaces;
    const totalPrice = [arrival, departure].reduce<number>((total, route) => {
        const routeTotalPrice = route.reduce<number>((routeTotal, pasPlace) => {
            routeTotal += pasPlace.price;
            return routeTotal;
        }, 0);

        total += routeTotalPrice;
        return total;
    }, 0);

    return totalPrice;
};

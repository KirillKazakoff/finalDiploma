import { TrainInfoFullT, ExtrasPricesCarT } from '../../../types/models/modelTickets';
import { CarContentT, PlacesStateT } from '../../../types/typesSlices';

const initExtras: ExtrasPricesCarT = {
    wifi_price: 0,
    linens_price: 0,
};

const initialCarContent: CarContentT = {
    carriageType: 'idle',
    extras: [],
    places: [],
    activeCar: null,
};

export const initRoutesPlaces = {
    departure: { ...initialCarContent },
    arrival: { ...initialCarContent },
};

export const initialState: PlacesStateT = {
    activeTicket: null,
    routes: { ...initRoutesPlaces },
};

export const initExtrasRoute = (state: PlacesStateT, route: TrainInfoFullT) => {
    const name = route.routeName;
    route.trainInfo.seatsTrainInfo.forEach((train) => {
        state.routes[name].extras.push({
            carNumber: train.carNumber,
            prices: { ...initExtras },
        });
    });
};
